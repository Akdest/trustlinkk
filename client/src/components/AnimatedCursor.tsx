"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      controls.start({
        x: e.clientX - 15,
        y: e.clientY - 15,
        transition: { type: "spring", stiffness: 200, damping: 30 },
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [controls]);

  // Detect hover on buttons
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).closest("button") ||
        (e.target as HTMLElement).closest("a")
      ) {
        setHovered(true);
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).closest("button") ||
        (e.target as HTMLElement).closest("a")
      ) {
        setHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      animate={controls}
      initial={{ x: 0, y: 0 }}
      className="fixed pointer-events-none z-[9999] rounded-full border-2 border-emerald-400"
      style={{
        width: hovered ? 50 : 30,
        height: hovered ? 50 : 30,
        backgroundColor: hovered ? "rgba(16, 185, 129, 0.2)" : "transparent",
        mixBlendMode: "difference",
        transition: "width 0.2s ease, height 0.2s ease, background-color 0.3s ease",
      }}
    />
  );
};

export default AnimatedCursor;
