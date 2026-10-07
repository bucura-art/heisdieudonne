"use client";

import { useEffect, useState } from "react";

type SkillBarProps = {
  name: string;
  level: number; // 1–5
  index?: number;
  sources?: string[];
};

export default function SkillBar({ name, level, index = 0, sources = [] }: SkillBarProps) {
  const percentage = (level / 5) * 100;
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const delay = index * 100; // 100ms stagger per item

    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        setWidth(percentage);
      });

      let startTimestamp: number | null = null;
      const duration = 1000;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        setCount(Math.floor(progress * percentage));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, index]);

  return (
    <div className="space-y-2" title={sources.length > 0 ? `Learnt via: ${sources.join(", ")}` : undefined}>
      <div className="flex justify-between text-sm text-slate-900">
        <span>{name}</span>
        <span>{count}%</span>
      </div>

      <div className="w-full h-2 rounded-full bg-border overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
