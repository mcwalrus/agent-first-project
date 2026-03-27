"use client";

export default function SkeletonCharacter() {
  return (
    <svg viewBox="0 0 200 500" width="100%" aria-label="Skeleton character">
      <g id="body">
        <g id="spine">
          {/* Vertebrae - cervical to sacral (y=120 to y=260) */}
          <ellipse cx="100" cy="126" rx="7" ry="5" fill="#f5f5f5" />
          <ellipse cx="100" cy="138" rx="7" ry="5" fill="#f5f5f5" />
          <ellipse cx="100" cy="150" rx="8" ry="5" fill="#f5f5f5" />
          <ellipse cx="100" cy="163" rx="8" ry="6" fill="#f0f0f0" />
          <ellipse cx="100" cy="176" rx="8" ry="6" fill="#f0f0f0" />
          <ellipse cx="100" cy="190" rx="9" ry="6" fill="#f0f0f0" />
          <ellipse cx="100" cy="204" rx="9" ry="6" fill="#f5f5f5" />
          <ellipse cx="100" cy="218" rx="9" ry="6" fill="#f5f5f5" />
          <ellipse cx="100" cy="232" rx="8" ry="6" fill="#f5f5f5" />
          <ellipse cx="100" cy="246" rx="7" ry="5" fill="#f0f0f0" />
          <ellipse cx="100" cy="258" rx="7" ry="5" fill="#f0f0f0" />
        </g>
        <g id="ribcage">
          {/* Ribs - left side (curving from spine outward-left) */}
          <path
            d="M98 137 Q78 142 68 155"
            stroke="#f5f5f5"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M97 150 Q72 157 60 174"
            stroke="#f5f5f5"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M97 163 Q68 172 56 193"
            stroke="#f5f5f5"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M97 176 Q66 187 56 210"
            stroke="#f5f5f5"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M97 190 Q67 203 60 224"
            stroke="#f0f0f0"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M98 203 Q70 218 66 232"
            stroke="#f0f0f0"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Ribs - right side (curving from spine outward-right) */}
          <path
            d="M102 137 Q122 142 132 155"
            stroke="#f5f5f5"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M103 150 Q128 157 140 174"
            stroke="#f5f5f5"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M103 163 Q132 172 144 193"
            stroke="#f5f5f5"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M103 176 Q134 187 144 210"
            stroke="#f5f5f5"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M103 190 Q133 203 140 224"
            stroke="#f0f0f0"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M102 203 Q130 218 134 232"
            stroke="#f0f0f0"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        <g id="pelvis">
          {/* Main pelvis bowl (iliac crest) */}
          <ellipse cx="100" cy="278" rx="46" ry="18" fill="#f0f0f0" />
          {/* Pubic symphysis / lower pelvis */}
          <ellipse cx="100" cy="300" rx="28" ry="12" fill="#f5f5f5" />
          {/* Left iliac wing */}
          <ellipse cx="62" cy="272" rx="16" ry="10" fill="#f0f0f0" />
          {/* Right iliac wing */}
          <ellipse cx="138" cy="272" rx="16" ry="10" fill="#f0f0f0" />
        </g>
        <g id="left-arm">
          {/* Shoulder joint */}
          <ellipse cx="62" cy="132" rx="8" ry="7" fill="#f0f0f0" />
          {/* Upper arm (humerus) */}
          <ellipse
            cx="55"
            cy="166"
            rx="5"
            ry="35"
            fill="#f5f5f5"
            transform="rotate(-11.6, 55, 166)"
          />
          {/* Elbow joint */}
          <ellipse cx="48" cy="200" rx="7" ry="6" fill="#f0f0f0" />
          {/* Forearm */}
          <ellipse
            cx="43"
            cy="229"
            rx="4"
            ry="30"
            fill="#f5f5f5"
            transform="rotate(-9.8, 43, 229)"
          />
          {/* Wrist */}
          <ellipse cx="38" cy="258" rx="6" ry="5" fill="#f0f0f0" />
        </g>
        <g id="right-arm">
          {/* Shoulder joint */}
          <ellipse cx="138" cy="132" rx="8" ry="7" fill="#f0f0f0" />
          {/* Upper arm (humerus) */}
          <ellipse
            cx="145"
            cy="166"
            rx="5"
            ry="35"
            fill="#f5f5f5"
            transform="rotate(11.6, 145, 166)"
          />
          {/* Elbow joint */}
          <ellipse cx="152" cy="200" rx="7" ry="6" fill="#f0f0f0" />
          {/* Forearm */}
          <ellipse
            cx="157"
            cy="229"
            rx="4"
            ry="30"
            fill="#f5f5f5"
            transform="rotate(9.8, 157, 229)"
          />
          {/* Wrist */}
          <ellipse cx="162" cy="258" rx="6" ry="5" fill="#f0f0f0" />
        </g>
        <g id="left-leg">
          {/* Hip joint */}
          <ellipse cx="78" cy="310" rx="9" ry="8" fill="#f0f0f0" />
          {/* Femur (upper leg) */}
          <ellipse cx="74" cy="350" rx="6" ry="40" fill="#f5f5f5" transform="rotate(-5, 74, 350)" />
          {/* Knee joint */}
          <ellipse cx="71" cy="392" rx="9" ry="7" fill="#f0f0f0" />
          {/* Tibia (lower leg) */}
          <ellipse
            cx="70"
            cy="428"
            rx="4.5"
            ry="34"
            fill="#f5f5f5"
            transform="rotate(-3, 70, 428)"
          />
          {/* Ankle */}
          <ellipse cx="69" cy="463" rx="7" ry="5" fill="#f0f0f0" />
          {/* Foot */}
          <ellipse cx="62" cy="473" rx="16" ry="7" fill="#f5f5f5" />
        </g>
        <g id="right-leg">
          {/* Hip joint */}
          <ellipse cx="122" cy="310" rx="9" ry="8" fill="#f0f0f0" />
          {/* Femur (upper leg) */}
          <ellipse
            cx="126"
            cy="350"
            rx="6"
            ry="40"
            fill="#f5f5f5"
            transform="rotate(5, 126, 350)"
          />
          {/* Knee joint */}
          <ellipse cx="129" cy="392" rx="9" ry="7" fill="#f0f0f0" />
          {/* Tibia (lower leg) */}
          <ellipse
            cx="130"
            cy="428"
            rx="4.5"
            ry="34"
            fill="#f5f5f5"
            transform="rotate(3, 130, 428)"
          />
          {/* Ankle */}
          <ellipse cx="131" cy="463" rx="7" ry="5" fill="#f0f0f0" />
          {/* Foot */}
          <ellipse cx="138" cy="473" rx="16" ry="7" fill="#f5f5f5" />
        </g>
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
