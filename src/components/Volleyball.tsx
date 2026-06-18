import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

export default function Volleyball() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 62,
    damping: 18,
    mass: 0.32,
  });

  const x = useTransform(
    smoothProgress,
    [0, 0.16, 0.32, 0.5, 0.68, 0.84, 1],
    ["82vw", "12vw", "68vw", "24vw", "76vw", "38vw", "82vw"],
  );
  const y = useTransform(
    smoothProgress,
    [0, 0.16, 0.32, 0.5, 0.68, 0.84, 1],
    ["76vh", "20vh", "72vh", "18vh", "66vh", "22vh", "74vh"],
  );
  const rotate = useTransform(smoothProgress, [0, 1], [0, 1380]);
  const scale = useTransform(
    smoothProgress,
    [0, 0.1, 0.3, 0.52, 0.74, 1],
    [0.65, 1, 0.72, 1.05, 0.76, 0.6],
  );
  const opacity = useTransform(
    smoothProgress,
    [0, 0.025, 0.9, 0.98],
    [0, 1, 1, 0],
  );

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 h-[clamp(3.5rem,7vw,6rem)] w-[clamp(3.5rem,7vw,6rem)]"
      style={{ x, y, rotate, scale, opacity }}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-[0_16px_20px_rgba(0,0,0,.35)]">
        <defs>
          <radialGradient id="ball-light" cx="35%" cy="28%">
            <stop offset="0%" stopColor="#fffdf2" />
            <stop offset="76%" stopColor="#e9e1cb" />
            <stop offset="100%" stopColor="#b9ad92" />
          </radialGradient>
          <clipPath id="ball-clip">
            <circle cx="50" cy="50" r="47" />
          </clipPath>
        </defs>
        <circle cx="50" cy="50" r="47" fill="url(#ball-light)" stroke="#111510" strokeWidth="3" />
        <g clipPath="url(#ball-clip)" fill="none" stroke="#e5663a" strokeWidth="8">
          <path d="M50 50C26 36 23 13 32-6" />
          <path d="M50 50C74 35 92 40 109 52" />
          <path d="M50 50C50 78 30 92 14 103" />
        </g>
        <g clipPath="url(#ball-clip)" fill="none" stroke="#1f2720" strokeWidth="4">
          <path d="M50 50C38 22 48 4 61-8" />
          <path d="M50 50C81 58 92 75 97 92" />
          <path d="M50 50C29 67 9 61-7 52" />
        </g>
      </svg>
    </motion.div>
  );
}
