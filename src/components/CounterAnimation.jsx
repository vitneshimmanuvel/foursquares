import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * CounterAnimation Component
 * Animates a number from 0 to the target value when scrolled into view
 */
const CounterAnimation = ({
  target,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;

      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);

        // Easing function - ease out cubic
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);

        const currentValue = Math.floor(easeOutCubic * target);
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  const formattedNumber =
    decimals > 0 ? count.toFixed(decimals) : count.toLocaleString();

  return (
    <motion.span
      ref={ref}
      className={`counter-animate ${className}`}
      initial={{ scale: 0.8 }}
      animate={isInView ? { scale: 1 } : { scale: 0.8 }}
      transition={{ duration: 0.3 }}
      style={{ color: 'inherit' }}
    >
      {prefix}
      {formattedNumber}
      {suffix}
    </motion.span>
  );
};

/**
 * TextReveal Component
 * Reveals text with slide-up animation on scroll
 */
export const TextReveal = ({
  children,
  className = "",
  delay = 0,
  as: Component = "span",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Component
      ref={ref}
      className={`text-reveal ${className}`}
      style={{ overflow: "hidden", display: "inline-block" }}
    >
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.65, 0, 0.35, 1],
        }}
      >
        {children}
      </motion.span>
    </Component>
  );
};

/**
 * WordByWord Component
 * Reveals text word by word with stagger effect
 */
export const WordByWord = ({ text, className = "", baseDelay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`word-reveal-container ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            overflow: "hidden",
            marginRight: "0.3em",
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.5,
              delay: baseDelay + index * 0.05,
              ease: [0.65, 0, 0.35, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

/**
 * SlideIn Component
 * Slides element from specified direction
 */
export const SlideIn = ({
  children,
  direction = "bottom", // 'left', 'right', 'top', 'bottom'
  delay = 0,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -100, y: 0 };
      case "right":
        return { x: 100, y: 0 };
      case "top":
        return { x: 0, y: -60 };
      case "bottom":
        return { x: 0, y: 60 };
      default:
        return { x: 0, y: 60 };
    }
  };

  const initial = getInitialPosition();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { x: 0, y: 0 } : initial}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.65, 0, 0.35, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScaleIn Component
 * Scales element in with spring animation
 */
export const ScaleIn = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale: 0.8 }}
      animate={isInView ? { scale: 1 } : { scale: 0.8 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerChildren Component
 * Animates children with stagger effect
 */
export const StaggerChildren = ({
  children,
  staggerDelay = 0.1,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { y: 40 },
        visible: {
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.65, 0, 0.35, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * ClipReveal Component
 * Reveals element using clip-path animation
 */
export const ClipReveal = ({
  children,
  delay = 0,
  direction = "bottom", // 'top', 'bottom', 'left', 'right'
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getClipPath = () => {
    switch (direction) {
      case "top":
        return { hidden: "inset(100% 0 0 0)", visible: "inset(0 0 0 0)" };
      case "bottom":
        return { hidden: "inset(0 0 100% 0)", visible: "inset(0 0 0 0)" };
      case "left":
        return { hidden: "inset(0 100% 0 0)", visible: "inset(0 0 0 0)" };
      case "right":
        return { hidden: "inset(0 0 0 100%)", visible: "inset(0 0 0 0)" };
      default:
        return { hidden: "inset(0 0 100% 0)", visible: "inset(0 0 0 0)" };
    }
  };

  const clipPath = getClipPath();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: clipPath.hidden }}
      animate={
        isInView
          ? { clipPath: clipPath.visible }
          : { clipPath: clipPath.hidden }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.65, 0, 0.35, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default CounterAnimation;
