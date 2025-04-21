"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { childVariants } from "./animated-section"

// Props interface for AnimatedElement
interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      custom={delay}
      variants={childVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement; 