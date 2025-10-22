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
    <audio
      ref={audioRef}
      src="/audio/m_1.mp3"
      loop
      preload="auto"
    />
  );
}
