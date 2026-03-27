# Skeleton Character Design

**Date:** 2026-03-27
**Status:** Approved

## Overview

Add an animated 2D skeleton character to the post-login home page. The skeleton occupies the right 1/3 of the screen, the existing content reflows to the left 2/3. The skeleton has a continuous idle breathing animation and its head tracks the mouse cursor.

---

## Layout

The post-login `page.tsx` changes from a centered single-column layout to a two-column CSS Grid:

- **Left column (2fr):** Existing content (app title, user card). Left-aligned with comfortable padding — no longer centered. Reads naturally in the wider column.
- **Right column (1fr):** Skeleton panel. Transparent background, full viewport height, skeleton anchored toward the bottom so it feels like it's standing in the frame.

Implementation: replace the current `flex items-center justify-center` wrapper with `grid grid-cols-[2fr_1fr]` on the page container.

---

## Component: `SkeletonCharacter`

A single client component at `src/components/SkeletonCharacter.tsx`.

### SVG Structure

The skeleton is a structured SVG with a fixed `viewBox="0 0 200 500"`, scaling to fill the panel width while maintaining proportions.

Bone groups are nested to reflect the skeleton hierarchy:

```
<svg viewBox="0 0 200 500">
  <g id="body">              ← breathing animation target
    <g id="spine" />         ← vertebrae
    <g id="ribcage" />       ← ribs (scaleY pulse on breathing)
    <g id="pelvis" />        ← hip
    <g id="left-arm" />      ← upper + lower arm
    <g id="right-arm" />
    <g id="left-leg" />      ← femur + lower leg + foot
    <g id="right-leg" />
    <g id="head">            ← mouse-tracking rotation target
      <g id="skull" />
      <g id="jaw" />         ← subtle droop during breathing
    </g>
  </g>
</svg>
```

### Visual Style

- Stylized/cartoonish with realistic proportions
- Bones rendered as white/off-white `<path>`, `<ellipse>`, and `<rect>` shapes
- Slight drop shadow on bones for depth against the page background
- No background on the panel — skeleton inhabits the page naturally

---

## Animation (Anime.js)

Dependency: `animejs` (npm).

### Idle Breathing

Starts on component mount, loops indefinitely:

```ts
anime({
  targets: "#body",
  translateY: [0, -6],
  duration: 2400,
  easing: "easeInOutSine",
  direction: "alternate",
  loop: true,
});
```

Synchronized secondary animations:

- `#ribcage`: subtle `scaleY` pulse (1 → 1.04) simulating chest expansion
- `#jaw`: tiny `rotate` offset so it droops and rises naturally with gravity

### Head Mouse Tracking

A `mousemove` listener on `window` fires on every cursor move:

1. Get the pixel position of the skeleton head center (via `getBoundingClientRect` on the head `<g>`)
2. Compute the angle from head center to cursor using `Math.atan2`
3. Clamp to ±30° to prevent unnatural snapping
4. Cancel any in-flight Anime.js tween on `#head`, start a new one:

```ts
anime({
  targets: "#head",
  rotate: clampedAngle,
  duration: 300,
  easing: "easeOutQuad",
});
```

Rotation origin is set at the base of the skull via `transform-origin` on the SVG group, so the head pivots naturally at the neck.

The listener is added on mount and cleaned up on unmount (React `useEffect` return).

---

## File Changes

| File                                   | Change                                                                                     |
| -------------------------------------- | ------------------------------------------------------------------------------------------ |
| `src/app/page.tsx`                     | Replace centered layout with 2-column grid; render `<SkeletonCharacter />` in right column |
| `src/components/SkeletonCharacter.tsx` | New client component — SVG skeleton + Anime.js animations                                  |
| `package.json`                         | Add `animejs` dependency                                                                   |

---

## Testing

- **Visual check:** Run `just dev`, log in, confirm two-column layout and skeleton renders correctly
- **Interaction check:** Move mouse across the page — head should smoothly follow, clamped to ±30°
- **Idle check:** Leave mouse still — breathing bob should loop continuously
- **Responsive:** Resize window — skeleton should scale proportionally within its column
- **Cleanup:** Navigate away and back — no memory leaks from dangling event listeners
