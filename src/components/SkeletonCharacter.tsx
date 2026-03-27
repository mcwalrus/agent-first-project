"use client";

export default function SkeletonCharacter() {
  return (
    <svg viewBox="0 0 200 500" width="100%" aria-label="Skeleton character">
      <g id="body">
        <g id="spine" />
        <g id="ribcage" />
        <g id="pelvis" />
        <g id="left-arm" />
        <g id="right-arm" />
        <g id="left-leg" />
        <g id="right-leg" />
        <g id="head">
          <g id="skull" />
          <g id="jaw" />
        </g>
      </g>
    </svg>
  );
}
