export function StreamingViz() {
  return (
    <div className="w-full print:hidden select-none" aria-hidden="true">

      {/* ── Mobile: 3-node linear pipeline ── */}
      <div className="block sm:hidden">
        <svg viewBox="0 0 380 120" className="w-full">
          <defs>
            <filter id="m-glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <marker id="m-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,1 L0,5 L5,3 z" fill="#cbd5e1" />
            </marker>
            <path id="m-p1" d="M 98 60 L 152 60" />
            <path id="m-p2" d="M 228 60 L 282 60" />
          </defs>

          {/* Edges */}
          <line x1="98" y1="60" x2="152" y2="60" stroke="#e2e8f0" strokeWidth="1.5" markerEnd="url(#m-arr)" />
          <line x1="228" y1="60" x2="282" y2="60" stroke="#e2e8f0" strokeWidth="1.5" markerEnd="url(#m-arr)" />

          {/* Kafka */}
          <circle cx="60" cy="60" r="38" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
          <text x="60" y="57" textAnchor="middle" fill="#475569" fontSize="12" fontFamily="monospace" fontWeight="600">Kafka</text>
          <text x="60" y="72" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">source</text>

          {/* Spark */}
          <circle cx="190" cy="60" r="38" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
          <text x="190" y="57" textAnchor="middle" fill="#475569" fontSize="12" fontFamily="monospace" fontWeight="600">Spark</text>
          <text x="190" y="72" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">streaming</text>

          {/* Databricks */}
          <circle cx="320" cy="60" r="38" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
          <text x="320" y="57" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="monospace" fontWeight="600">Databricks</text>
          <text x="320" y="72" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">lakehouse</text>

          {/* Particles — p1 */}
          <circle r="4" fill="#0ea5e9" filter="url(#m-glow)">
            <animateMotion dur="1.6s" repeatCount="indefinite" begin="0s"><mpath href="#m-p1" /></animateMotion>
          </circle>
          <circle r="3" fill="#7dd3fc" opacity="0.8" filter="url(#m-glow)">
            <animateMotion dur="1.6s" repeatCount="indefinite" begin="-0.8s"><mpath href="#m-p1" /></animateMotion>
          </circle>

          {/* Particles — p2 */}
          <circle r="4" fill="#0ea5e9" filter="url(#m-glow)">
            <animateMotion dur="1.8s" repeatCount="indefinite" begin="-0.3s"><mpath href="#m-p2" /></animateMotion>
          </circle>
          <circle r="3" fill="#7dd3fc" opacity="0.8" filter="url(#m-glow)">
            <animateMotion dur="1.8s" repeatCount="indefinite" begin="-1.1s"><mpath href="#m-p2" /></animateMotion>
          </circle>
        </svg>
      </div>

      {/* ── Desktop: 5-node branching pipeline ── */}
      <div className="hidden sm:block">
        <svg viewBox="0 0 640 180" className="w-full">
          <defs>
            <filter id="d-glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <marker id="d-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,1 L0,5 L5,3 z" fill="#cbd5e1" />
            </marker>
            {/* Motion paths mirror the drawn edges exactly */}
            <path id="d-p1" d="M 89 90 L 151 90" />
            <path id="d-p2" d="M 219 90 L 292 90" />
            <path id="d-p3" d="M 367 80 C 407 80 438 45 458 45" />
            <path id="d-p4" d="M 366 101 C 406 101 438 138 458 138" />
          </defs>

          {/* Edges */}
          <line x1="89" y1="90" x2="151" y2="90" stroke="#e2e8f0" strokeWidth="1.5" markerEnd="url(#d-arr)" />
          <line x1="219" y1="90" x2="292" y2="90" stroke="#e2e8f0" strokeWidth="1.5" markerEnd="url(#d-arr)" />
          <path d="M 367 80 C 407 80 438 45 458 45" fill="none" stroke="#e2e8f0" strokeWidth="1.5" markerEnd="url(#d-arr)" />
          <path d="M 366 101 C 406 101 438 138 458 138" fill="none" stroke="#e2e8f0" strokeWidth="1.5" markerEnd="url(#d-arr)" />

          {/* Kafka */}
          <circle cx="55" cy="90" r="34" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
          <text x="55" y="87" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="monospace" fontWeight="600">Kafka</text>
          <text x="55" y="100" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">source</text>

          {/* Spark */}
          <circle cx="185" cy="90" r="34" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
          <text x="185" y="87" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="monospace" fontWeight="600">Spark</text>
          <text x="185" y="100" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">streaming</text>

          {/* Databricks */}
          <circle cx="330" cy="90" r="38" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
          <text x="330" y="87" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="monospace" fontWeight="600">Databricks</text>
          <text x="330" y="100" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">lakehouse</text>

          {/* Snowflake */}
          <circle cx="490" cy="45" r="32" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
          <text x="490" y="42" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="monospace" fontWeight="600">Snowflake</text>
          <text x="490" y="55" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">warehouse</text>

          {/* Feature Store */}
          <circle cx="490" cy="138" r="32" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
          <text x="490" y="132" textAnchor="middle" fill="#475569" fontSize="9.5" fontFamily="monospace" fontWeight="600">Feature</text>
          <text x="490" y="146" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">store</text>

          {/* Particles — p1 (Kafka → Spark) */}
          <circle r="4" fill="#0ea5e9" filter="url(#d-glow)">
            <animateMotion dur="1.8s" repeatCount="indefinite" begin="0s"><mpath href="#d-p1" /></animateMotion>
          </circle>
          <circle r="3" fill="#7dd3fc" opacity="0.8" filter="url(#d-glow)">
            <animateMotion dur="1.8s" repeatCount="indefinite" begin="-0.9s"><mpath href="#d-p1" /></animateMotion>
          </circle>

          {/* Particles — p2 (Spark → Databricks) */}
          <circle r="4" fill="#0ea5e9" filter="url(#d-glow)">
            <animateMotion dur="2s" repeatCount="indefinite" begin="-0.4s"><mpath href="#d-p2" /></animateMotion>
          </circle>
          <circle r="3" fill="#7dd3fc" opacity="0.8" filter="url(#d-glow)">
            <animateMotion dur="2s" repeatCount="indefinite" begin="-1.4s"><mpath href="#d-p2" /></animateMotion>
          </circle>

          {/* Particles — p3 (Databricks → Snowflake) */}
          <circle r="4" fill="#0ea5e9" filter="url(#d-glow)">
            <animateMotion dur="2.2s" repeatCount="indefinite" begin="-0.6s"><mpath href="#d-p3" /></animateMotion>
          </circle>
          <circle r="3" fill="#7dd3fc" opacity="0.8" filter="url(#d-glow)">
            <animateMotion dur="2.2s" repeatCount="indefinite" begin="-1.7s"><mpath href="#d-p3" /></animateMotion>
          </circle>

          {/* Particles — p4 (Databricks → Feature Store) */}
          <circle r="4" fill="#0ea5e9" filter="url(#d-glow)">
            <animateMotion dur="2.2s" repeatCount="indefinite" begin="-0.9s"><mpath href="#d-p4" /></animateMotion>
          </circle>
          <circle r="3" fill="#7dd3fc" opacity="0.8" filter="url(#d-glow)">
            <animateMotion dur="2.2s" repeatCount="indefinite" begin="-2.0s"><mpath href="#d-p4" /></animateMotion>
          </circle>
        </svg>
      </div>

    </div>
  );
}
