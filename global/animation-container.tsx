"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type AnimationType = "fadeUp" | "fadeRight" | "scaleUp";

interface AnimationContainerProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  delay?: number;
  animation?: AnimationType;
}

const AnimationContainer: React.FC<AnimationContainerProps> = ({
  children,
  className,
  reverse = false,
  delay = 0,
  animation = "fadeUp",
}) => {
  const variants: Record<AnimationType, Variants> = {
    fadeUp: {
      hidden: { opacity: 0, y: reverse ? -20 : 20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: reverse ? -20 : 20 },
      visible: { opacity: 1, x: 0 },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{
        duration: 0.2,
        delay: delay,
        ease: "easeInOut",
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      variants={variants[animation]}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;