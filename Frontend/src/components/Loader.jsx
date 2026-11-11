import { useState, useEffect } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 50 steady steps of 20ms = 1000ms (1.0s silky smooth progression)
    // No RAF state churn, no main thread blocking
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);

        // Smooth curtain exit
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 550);
        }, 120);
      } else {
        setProgress(current);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <aside
      aria-label="Loading portfolio"
      aria-live="polite"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center select-none"
      style={{
        backgroundColor: 'var(--color-bg)',
        transform: isExiting ? 'translate3d(0, -100%, 0)' : 'translate3d(0, 0, 0)',
        opacity: isExiting ? 0 : 1,
        transition: 'transform 0.55s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.5s ease',
        willChange: 'transform, opacity',
      }}
    >
      <div className="flex flex-col items-center max-w-xs w-full px-6 text-center">
        {/* Monogram AK Badge */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg mb-5 shadow-sm tracking-tight relative"
          style={{
            backgroundColor: 'var(--color-text)',
            color: 'var(--color-bg)',
          }}
        >
          <span>AK</span>
          <span
            className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: 'var(--color-accent)' }}
          />
        </div>

        {/* Developer Name & Title */}
        <h1
          className="text-2xl font-bold tracking-tight mb-1"
          style={{ color: 'var(--color-text)' }}
        >
          Ayan Khan
        </h1>

        <p
          className="text-xs font-semibold uppercase tracking-widest mb-7"
          style={{ color: 'var(--color-accent)' }}
        >
          Full Stack Developer
        </p>

        {/* GPU-Accelerated Progress Track (ScaleX instead of Width to eliminate reflow lag) */}
        <div
          className="w-full h-1.5 rounded-full overflow-hidden mb-3 relative"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-text) 8%, transparent)',
          }}
        >
          <div
            className="h-full w-full rounded-full origin-left"
            style={{
              backgroundColor: 'var(--color-accent)',
              transform: `scaleX(${progress / 100})`,
              transition: 'transform 0.06s linear',
              willChange: 'transform',
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
