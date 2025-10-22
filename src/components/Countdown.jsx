/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import MusicPlayer from "./MusicPlayer";
import RhythmVisualizer from "./RhythmVisualizer";

export default function Countdown({ timeLeft }) {
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const hearts = Array.from({ length: 25 }).map((_, i) => ({
  size: Math.random() * 1.5 + 1,
  delay: Math.random() * 5,
  color: Math.random() > 0.5 ? "text-pink-300" : "text-pink-200",
}));


  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500 text-white text-center overflow-hidden">
      {/* 🎵 Músic*/}
      <MusicPlayer />
      
      {/* 💞 corazones flotando */}
      {hearts.map((h, i) => (
  <motion.div
    key={i}
    className="absolute"
    style={{
      top: '100vh',
      left: `${Math.random() * 100}vw`,
      zIndex: 0,
    }}
    animate={{
      y: [0, -window.innerHeight - 200],
      opacity: [0, 1, 0],
      x: [
        `${Math.random() * 10 - 5}vw`, // leve vaivén
        `${Math.random() * 10 - 5}vw`,
      ],
    }}
    transition={{
      duration: 30 + Math.random() * 10, // ⏳ 25 a 35 segundos (MUY suave)
      ease: 'easeInOut',
      repeat: Infinity,
    }}
  >
    <motion.span
      style={{
        fontSize: `${Math.random() * 20 + 10}px`,
        color: 'rgba(255, 182, 193, 0.8)', // rosado suave
        filter: 'blur(0.6px)',
        display: 'inline-block',
        transform: `rotate(${Math.random() * 20 - 10}deg)`,
      }}
    >
      ❤️
    </motion.span>
  </motion.div>
))}



      {/* 🕒 título */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg"
      >
        💖 Cuenta regresiva para la sorpresa 💖
      </motion.h1>

      {/* ⏱ contador */}
      <div className="text-5xl md:text-7xl font-mono flex gap-3 z-10">
        <TimeBox label="Días" value={days} />
        <TimeBox label="Horas" value={hours} />
        <TimeBox label="Min" value={minutes} />
        <TimeBox label="Seg" value={seconds} />
      </div>

      <p className="mt-8 text-lg md:text-2xl italic opacity-80 z-10">
        Falta poco para descubrir algo muy especial ✨
      </p>
      {/* 🎶 visualizador de ritmo */}
      <RhythmVisualizer />
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg">
      <span className="text-5xl font-bold">{String(value).padStart(2, "0")}</span>
      <span className="text-sm uppercase tracking-wide">{label}</span>
    </div>
  );
}
