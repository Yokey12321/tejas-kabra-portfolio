import { motion, useReducedMotion } from "motion/react";

const positions = [
  { x: 21, y: 27 },
  { x: 21, y: 50 },
  { x: 21, y: 73 },
  { x: 40, y: 27 },
  { x: 40, y: 50 },
  { x: 40, y: 73 },
];

export default function HeroCourt() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-court" aria-label="Volleyball court rotation diagram">
      <div className="hero-court-copy">
        <span className="technical-label">All positions // One system</span>
        <strong>Read the court.<br />Build the play.</strong>
      </div>
      <svg viewBox="0 0 100 100" className="hero-court-svg" aria-hidden="true">
        <defs>
          <linearGradient id="court-surface" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#211238" />
            <stop offset="100%" stopColor="#0d0913" />
          </linearGradient>
          <filter id="court-glow">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect x="9" y="14" width="82" height="72" rx="1.5" fill="url(#court-surface)" stroke="#f3f0e6" strokeOpacity=".28" />
        <path d="M50 14V86M9 38H91M9 62H91" stroke="#f3f0e6" strokeOpacity=".22" strokeWidth=".55" />
        <path d="M48.7 11V89M51.3 11V89" stroke="#f3f0e6" strokeOpacity=".8" strokeWidth=".42" />
        <path d="M47.8 14V86M52.2 14V86" stroke="#ff6b2c" strokeOpacity=".5" strokeWidth=".25" />
        {positions.map((position, index) => (
          <g key={`${position.x}-${position.y}`}>
            <motion.circle
              cx={position.x}
              cy={position.y}
              r="3.4"
              fill={index === 5 ? "#ff6b2c" : "#7c3aed"}
              stroke="#f3f0e6"
              strokeWidth=".65"
              initial={reduceMotion ? undefined : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.35 + index * 0.12, type: "spring", stiffness: 150, damping: 16 }}
            />
          </g>
        ))}
        <motion.path
          d="M40 73C53 49 65 38 81 28"
          fill="none"
          stroke="#ffd400"
          strokeWidth=".8"
          strokeDasharray="2 2"
          filter="url(#court-glow)"
          initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 1.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.g
          initial={reduceMotion ? undefined : { x: -10, y: 16, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <circle cx="81" cy="28" r="4.2" fill="#ffd400" stroke="#f3f0e6" strokeWidth=".55" />
          <path d="M77.4 26.2C80 27.2 82.1 25.1 84.5 23.9M78.2 31.1C79.4 28.8 78.8 27 77.4 25.5M82.8 31.3C81.2 29.5 81.7 27.4 84.8 25.9" fill="none" stroke="#1657b8" strokeWidth="1.35" />
        </motion.g>
        <text x="12" y="92.5" fill="#f3f0e6" fillOpacity=".35" fontSize="2.3" fontFamily="monospace">ROTATION 01 // SERVE RECEIVE</text>
      </svg>
      <div className="hero-court-legend">
        <span><i className="bg-violet-600"></i>Base position</span>
        <span><i className="bg-signal"></i>Server</span>
        <span><i className="bg-[#ffd400]"></i>Ball path</span>
      </div>
    </div>
  );
}
