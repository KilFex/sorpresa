/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const photos = [
  { year: 1, img: "/images/1.jpg" },
  { year: 2, img: "/images/2.jpg" },
  { year: 4, img: "/images/3.jpg" },
  { year: 4, img: "/images/4.jpg" },
  { year: 4, img: "/images/5.jpg" },
  { year: 4, img: "/images/6.jpg" },
  { year: 5, img: "/images/7.jpg" },
  { year: 4, img: "/images/8.jpg" },
  { year: 4, img: "/images/9.jpg" },
  { year: 4, img: "/images/10.jpg" },
  { year: 5, img: "/images/11.jpg" },
  { year: 4, img: "/images/12.jpg" },
  { year: 7, img: "/images/13.jpg" },
  { year: 7, img: "/images/14.jpg" },
  { year: 6, img: "/images/15.jpg" },
  { year: 6, img: "/images/16.jpg" },
  { year: 8, img: "/images/17.jpg" }
];

export default function Timeline() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pink-100 to-purple-200">
      {/* Línea curva SVG */}
<svg
  className="absolute top-0 left-0 w-full h-full pointer-events-none"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 1000"
  preserveAspectRatio="none"
>
  <path
    d="M50 0 C20 150, 80 300, 50 450 S80 750, 50 1000"
    fill="none"
    stroke="url(#lineGradient)"
    strokeWidth="3"
  />
  <defs>
    <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#ec4899" /> {/* rosa */}
      <stop offset="100%" stopColor="#9333ea" /> {/* morado */}
    </linearGradient>
  </defs>
</svg>

      <div className="w-full flex flex-col gap-32 py-20">
        {photos.map((photo, index) => (
          <FadeImage key={index} photo={photo} side={index % 2 === 0 ? "left" : "right"} />
        ))}
      </div>
    </div>
  );
}

function FadeImage({ photo, side }) {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`flex ${side === "left" ? "justify-start" : "justify-end"} w-full px-4 md:px-16`}
    >
      <motion.div
        initial={{ opacity: 0.2, scale: 0.9 }}
        animate={{ opacity: inView ? 1 : 0.2, scale: inView ? 1 : 0.9 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white rounded-3xl shadow-xl overflow-hidden w-72 h-72 flex flex-col justify-center items-center"
      >
        <img src={photo.img} alt={photo.year} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 w-full text-center bg-black/50 text-white py-2 text-lg font-bold">
          Año {photo.year}
        </div>
      </motion.div>
    </div>
  );
}
