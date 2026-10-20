"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: string;
}

export default function CountUp({ target }: CountUpProps) {
  const match = target.match(/^(\d+)(.*)/);
  const numericValue = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : target;

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || numericValue === 0) return;

    const duration = 1800;
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * numericValue));

      if (frame >= totalFrames) {
        setCount(numericValue);
        clearInterval(counter);
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [started, numericValue]);

  if (!match) return <>{target}</>;

  return (
    <span ref={ref}>
      {started ? `${count}${suffix}` : `0${suffix}`}
    </span>
  );
}
