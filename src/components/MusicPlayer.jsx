import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const startAudio = () => {
      if (!started && audioRef.current) {
        audioRef.current.play().catch(() => {});
        setStarted(true);
      }
    };

    window.addEventListener("click", startAudio);
    window.addEventListener("touchstart", startAudio);

    return () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("touchstart", startAudio);
    };
  }, [started]);

  return (
    <>
      {/* 🎶 Pantalla inicial para móviles */}
      {!started && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm z-50">
          <p className="text-white text-xl mb-4 animate-pulse">
            🎵 Toca para activar la música 🎵
          </p>
          <button
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.play().catch(() => {});
                setStarted(true);
              }
            }}
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl shadow-lg hover:bg-pink-600 transition"
          >
            Iniciar música 💖
          </button>
        </div>
      )}

      <audio ref={audioRef} src="/audio/m_1.mp3" loop preload="auto" />
    </>
  );
}
