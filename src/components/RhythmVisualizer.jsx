/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function RhythmVisualizer() {
  return (
    <div className="absolute bottom-10 flex gap-2 z-10">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="bg-white rounded-full"
          style={{ width: "8px", height: "40px" }}
          animate={{
            scaleY: [1, Math.random() * 2 + 0.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 0.8 + Math.random() * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
