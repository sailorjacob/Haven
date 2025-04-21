"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"

// Interface for AnimatedSection props
interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
  threshold?: number;
}

// Enhanced 3D animation variants
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9,
    transformPerspective: 1000,
    rotateX: 5,
    z: -100
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    z: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

// Child element animation variants
export const childVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay * 0.1
    }
  })
};

// Component for animated sections
const AnimatedSection = ({ 
  id, 
  className, 
  children, 
  animate = true,
  threshold = 0.2
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!animate) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start("visible");
          setHasAnimated(true);
        }
      },
      { threshold }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, animate, hasAnimated, threshold]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 