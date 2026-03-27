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
          <g id="skull">
            {/* Main cranium */}
            <ellipse cx="100" cy="65" rx="42" ry="45" fill="#f5f5f5" />
            {/* Cheekbone widening */}
            <ellipse cx="100" cy="95" rx="38" ry="18" fill="#f5f5f5" />
            {/* Eye sockets */}
            <ellipse cx="83" cy="68" rx="10" ry="11" fill="#1a1a1a" />
            <ellipse cx="117" cy="68" rx="10" ry="11" fill="#1a1a1a" />
            {/* Nasal cavity */}
            <path d="M95 84 Q100 90 105 84 Q102 92 100 93 Q98 92 95 84Z" fill="#1a1a1a" />
            {/* Temple indentations */}
            <ellipse cx="59" cy="72" rx="8" ry="14" fill="#e0e0e0" />
            <ellipse cx="141" cy="72" rx="8" ry="14" fill="#e0e0e0" />
          </g>
          <g id="jaw">
            {/* Lower jaw body */}
            <path
              d="M66 100 Q65 118 100 120 Q135 118 134 100 Q117 108 100 108 Q83 108 66 100Z"
              fill="#f5f5f5"
            />
            {/* Chin */}
            <ellipse cx="100" cy="118" rx="24" ry="8" fill="#f0f0f0" />
            {/* Teeth row upper */}
            <rect x="75" y="100" width="50" height="6" rx="2" fill="white" />
            {/* Teeth row lower */}
            <rect x="78" y="108" width="44" height="5" rx="2" fill="white" />
          </g>
        </g>
      </g>
    </svg>
  );
}
