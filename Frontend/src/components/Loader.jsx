import { useState, useEffect } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1200; // 1.2s authentic pace

    const tick = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      // Smooth exponential easing for natural feel
      const easedPercent = Math.round(progressRatio * 100);
      setProgress(easedPercent);

      if (easedPercent < 40) {
        setStatusText('Loading Assets');
      } else if (easedPercent < 80) {
        setStatusText('Building Experience');
      } else {
        setStatusText('Ready');
      }

      if (progressRatio < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 650); // Matches curtain slide duration
        }, 150);
      }
    };

    const frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  return (
    <aside
      aria-label="Loading portfolio"
      aria-live="polite"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center select-none transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="flex flex-col items-center max-w-sm w-full px-8 text-center">
        {/* Monogram AK Badge with Pulse Indicator */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl mb-6 tracking-tight relative shadow-sm transition-transform duration-300"
          style={{
            backgroundColor: 'var(--color-text)',
            color: 'var(--color-bg)',
          }}
        >
          <span>AK</span>
          <span
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping opacity-75"
            style={{ backgroundColor: 'var(--color-accent)' }}
          />
          <span
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
            style={{ backgroundColor: 'var(--color-accent)' }}
          />
        </div>

        {/* Developer Name & Title */}
        <h1
          className="text-2xl sm:text-3xl font-bold tracking-tight mb-1"
          style={{ color: 'var(--color-text)' }}
        >
          Ayan Khan
        </h1>

        <p
          className="text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ color: 'var(--color-accent)' }}
        >
          Full Stack Developer
        </p>

        {/* Dual-Stage Minimal Progress Bar */}
        <div
          className="w-full h-1.5 rounded-full overflow-hidden mb-3 relative"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-text) 8%, transparent)',
          }}
        >
          <div
            className="h-full rounded-full transition-all duration-75 ease-out relative"
            style={{
              width: `${progress}%`,
              backgroundColor: 'var(--color-accent)',
              boxShadow: '0 0 12px color-mix(in srgb, var(--color-accent) 60%, transparent)',
            }}
          />
        </div>

        {/* Progress Metric & Status */}
        <div
          className="flex items-center justify-between w-full text-xs font-mono font-medium tracking-wider"
          style={{
            color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
          }}
        >
          <span>{statusText.toUpperCase()}</span>
          <span>{progress < 10 ? `0${progress}` : progress}%</span>
        </div>
      </div>
    </aside>
  );
}
