import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function ScrollServe() {
  const section = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 48,
    damping: 18,
    mass: 0.7,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0.08, 0.88], ["-10vw", "94vw"]);
  const y = useTransform(
    smoothProgress,
    [0.08, 0.48, 0.88],
    ["20vh", "-18vh", "20vh"],
  );
  const rotate = useTransform(smoothProgress, [0.08, 0.88], [0, 720]);
  const ballOpacity = useTransform(
    smoothProgress,
    [0.02, 0.08, 0.88, 0.96],
    [0, 1, 1, 0],
  );
  const titleOpacity = useTransform(
    smoothProgress,
    [0.18, 0.38, 0.74, 0.9],
    [0, 1, 1, 0],
  );
  const titleY = useTransform(smoothProgress, [0.18, 0.44], [36, 0]);

  return (
    <section ref={section} className="serve-transition" aria-label="Transition to selected projects">
      <div className="serve-sticky">
        <motion.div
          className="serve-message"
          style={reduceMotion ? undefined : { opacity: titleOpacity, y: titleY }}
        >
          <span>Receive the constraint.</span>
          <strong>Return a working system.</strong>
        </motion.div>
        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            className="serve-ball"
            style={{ x, y, rotate, opacity: ballOpacity }}
          >
            <svg viewBox="0 0 100 100">
              <defs>
                <radialGradient id="serve-ball-light" cx="35%" cy="28%">
                  <stop offset="0%" stopColor="#ffef57" />
                  <stop offset="78%" stopColor="#ffd400" />
                  <stop offset="100%" stopColor="#b99800" />
                </radialGradient>
                <clipPath id="serve-ball-clip">
                  <circle cx="50" cy="50" r="47" />
                </clipPath>
              </defs>
              <circle cx="50" cy="50" r="47" fill="url(#serve-ball-light)" stroke="#09070d" strokeWidth="3" />
              <g clipPath="url(#serve-ball-clip)" fill="none" stroke="#1657b8" strokeWidth="10">
                <path d="M50 50C26 36 23 13 32-6" />
                <path d="M50 50C74 35 92 40 109 52" />
                <path d="M50 50C50 78 30 92 14 103" />
              </g>
              <g clipPath="url(#serve-ball-clip)" fill="none" stroke="#f7f5e9" strokeWidth="4">
                <path d="M50 50C38 22 48 4 61-8" />
                <path d="M50 50C81 58 92 75 97 92" />
                <path d="M50 50C29 67 9 61-7 52" />
              </g>
            </svg>
          </motion.div>
        )}
        <div className="serve-court" aria-hidden="true">
          <div className="serve-side serve-side-left">
            <span className="serve-player serve-player-a"></span>
            <span className="serve-player serve-player-b"></span>
            <span className="serve-player serve-player-c"></span>
          </div>
          <div className="serve-net"></div>
          <div className="serve-side serve-side-right">
            <span className="serve-player serve-player-a"></span>
            <span className="serve-player serve-player-b"></span>
            <span className="serve-player serve-player-c"></span>
          </div>
        </div>
        <div className="serve-floor" aria-hidden="true"></div>
      </div>
    </section>
  );
}
