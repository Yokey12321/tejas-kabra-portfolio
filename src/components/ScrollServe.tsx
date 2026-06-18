import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ScrollServe() {
  const section = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.12, 0.78], ["-18vw", "102vw"]);
  const y = useTransform(
    scrollYProgress,
    [0.12, 0.42, 0.78],
    ["7rem", "-5rem", "6rem"],
  );
  const rotate = useTransform(scrollYProgress, [0.12, 0.78], [0, 620]);
  const ballOpacity = useTransform(
    scrollYProgress,
    [0.04, 0.12, 0.78, 0.88],
    [0, 1, 1, 0],
  );
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.42, 0.72, 0.88],
    [0, 1, 1, 0],
  );
  const titleY = useTransform(scrollYProgress, [0.2, 0.48], [36, 0]);

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
                  <stop offset="0%" stopColor="#fffdf4" />
                  <stop offset="78%" stopColor="#e8dfcb" />
                  <stop offset="100%" stopColor="#ada18a" />
                </radialGradient>
                <clipPath id="serve-ball-clip">
                  <circle cx="50" cy="50" r="47" />
                </clipPath>
              </defs>
              <circle cx="50" cy="50" r="47" fill="url(#serve-ball-light)" stroke="#09070d" strokeWidth="3" />
              <g clipPath="url(#serve-ball-clip)" fill="none" stroke="#ff6b2c" strokeWidth="8">
                <path d="M50 50C26 36 23 13 32-6" />
                <path d="M50 50C74 35 92 40 109 52" />
                <path d="M50 50C50 78 30 92 14 103" />
              </g>
              <g clipPath="url(#serve-ball-clip)" fill="none" stroke="#7c3aed" strokeWidth="5">
                <path d="M50 50C38 22 48 4 61-8" />
                <path d="M50 50C81 58 92 75 97 92" />
                <path d="M50 50C29 67 9 61-7 52" />
              </g>
            </svg>
          </motion.div>
        )}
        <div className="serve-floor" aria-hidden="true"></div>
      </div>
    </section>
  );
}
