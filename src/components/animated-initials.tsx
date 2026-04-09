"use client";

export function AnimatedInitials() {
  return (
    <div className="w-20 h-20 shrink-0 select-none print:hidden -translate-x-4" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <style>{`
          .dp {
            fill: none;
            stroke: currentColor;
            stroke-width: 2.2;
            stroke-linecap: butt;
            stroke-linejoin: round;
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            opacity: 0;
          }

          /* reveal + draw fire at the same moment */
          .d-eye-l  { animation: dp-draw 0.4s ease-out  0.3s  forwards,  dp-show 0.01s 0.3s  forwards; }
          .d-eye-r  { animation: dp-draw 0.4s ease-out  0.85s forwards,  dp-show 0.01s 0.85s forwards; }
          .d-smile  { animation: dp-draw 0.7s ease-out  1.4s  forwards,  dp-show 0.01s 1.4s  forwards; }

          @keyframes dp-draw { to { stroke-dashoffset: 0; } }
          @keyframes dp-show  { to { opacity: 1; } }
        `}</style>

        {/* Left eye — smaller, sits a touch higher */}
        <path
          className="dp d-eye-l"
          d="M 34 43 C 34 39 41 39 41 43 C 41 47 34 47 34 43"
          pathLength="100"
        />

        {/* Right eye — slightly larger, a touch lower */}
        <path
          className="dp d-eye-r"
          d="M 59 46 C 59 41 67 41 67 46 C 67 51 59 51 59 46"
          pathLength="100"
        />

        {/* Smile — asymmetric, curves deeper on the right */}
        <path
          className="dp d-smile"
          d="M 33 64 C 41 77 61 78 68 65"
          pathLength="100"
        />
      </svg>
    </div>
  );
}
