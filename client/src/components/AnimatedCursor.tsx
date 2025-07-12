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
        x: e.clientX - 20,
        y: e.clientY - 20,
        transition: { type: "tween" }

      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [controls]);

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
      className="fixed pointer-events-none z-[9999] rounded-full"
      style={{
        width: hovered ? 60 : 36,
        height: hovered ? 60 : 36,
        border: hovered ? "3px solid #0f172a" : "2px solid #334155",
        backgroundColor: hovered ? "rgba(51,65,85,0.15)" : "transparent",
        mixBlendMode: "multiply",
        transition: "all 0.3s ease",
      }}
    />
  );
};

export default AnimatedCursor;
