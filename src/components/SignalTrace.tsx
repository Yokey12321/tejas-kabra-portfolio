import { motion, useReducedMotion } from "motion/react";

export default function SignalTrace() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <svg className="h-full w-full" viewBox="0 0 760 520" fill="none">
        <g opacity=".18" stroke="currentColor">
          {Array.from({ length: 18 }, (_, index) => (
            <line key={`v-${index}`} x1={index * 48} x2={index * 48} y2="520" />
          ))}
          {Array.from({ length: 13 }, (_, index) => (
            <line key={`h-${index}`} y1={index * 48} y2={index * 48} x2="760" />
          ))}
        </g>
        <g stroke="currentColor" opacity=".28">
          <circle cx="597" cy="194" r="120" />
          <circle cx="597" cy="194" r="82" />
          <circle cx="597" cy="194" r="8" fill="currentColor" />
        </g>
        <motion.path
          d="M-40 360H120V290H235V332H346V218H470V194H597V104H790"
          stroke="#ff6b2c"
          strokeWidth="3"
          strokeLinecap="square"
          initial={{ pathLength: reduceMotion ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        />
        {[
          [120, 360],
          [235, 290],
          [346, 332],
          [470, 218],
          [597, 194],
        ].map(([cx, cy], index) => (
          <motion.circle
            key={index}
            cx={cx}
            cy={cy}
            r="5"
            fill="#f2efe5"
            stroke="#8b5cf6"
            strokeWidth="3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: reduceMotion ? 0 : 1 + index * 0.12, type: "spring" }}
          />
        ))}
      </svg>
    </div>
  );
}
