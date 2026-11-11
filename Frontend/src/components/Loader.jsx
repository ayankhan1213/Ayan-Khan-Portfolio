import { useState, useEffect } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Smooth authentic progress simulation (approx 1.2s total)
    const startTime = performance.now();
    const duration = 1100;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      // Easing curve for human, authentic pacing (starts steady, finishes clean)
      const eased = Math.round(progressRatio * 100);
      setProgress(eased);

      if (progressRatio < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500); // Wait for fade-out transition
        }, 180);
      }
    };

    const frameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  return (
    <aside
      aria-label="Loading site"
      aria-live="polite"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center select-none transition-all duration-500 ease-out ${
        isFading ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="flex flex-col items-center max-w-xs w-full px-6 text-center">
        {/* Monogram AK Badge */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg mb-5 shadow-sm tracking-tight transition-transform duration-300 hover:scale-105"
          style={{
            backgroundColor: 'var(--color-text)',
            color: 'var(--color-bg)',
          }}
        >
          AK
        </div>

        {/* Developer Name */}
        <h1
          className="text-2xl sm:text-3xl font-bold tracking-tight mb-1"
          style={{ color: 'var(--color-text)' }}
        >
          Ayan Khan
        </h1>

        {/* Developer Subtitle */}
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ color: 'var(--color-accent)' }}
        >
          Full Stack Developer
        </p>

        {/* Minimal Progress Line */}
        <div
          className="w-full h-1 rounded-full overflow-hidden mb-3"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
          }}
        >
          <div
            className="h-full rounded-full transition-all duration-75 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: 'var(--color-accent)',
            }}
          />
        </div>

        {/* Progress Metric */}
        <div
          className="flex items-center justify-between w-full text-xs font-mono font-medium tracking-wider"
          style={{
            color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
          }}
        >
          <span>PORTFOLIO</span>
          <span>{progress < 10 ? `0${progress}` : progress}%</span>
        </div>
      </div>
    </aside>
  );
}

