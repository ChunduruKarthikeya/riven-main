"use client";

import React from "react";
import { motion } from "framer-motion";

const MovingLogo: React.FC = (): React.JSX.Element => {
  return (
    <div className="relative w-full overflow-hidden bg-background py-10 sm:py-16 md:py-24">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {[...Array(8)].map((_, index: number) => (
          <div key={index} className="flex items-center mx-4 md:mx-8">
            <span
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent px-4 select-none tracking-tighter"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.4)", // Brightened stroke
              }}
            >
              Riven
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MovingLogo;