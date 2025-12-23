"use client";
import { useEffect, useState } from "react";

export default function CurrentTimeAlarm() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="flex flex-col items-center gap-3">

      <div className="relative w-44 h-44 rounded-full border-4 border-gray-800 bg-white">

        {[...Array(12)].map((_, i) => {
          const num = i + 1;
          const angle = (num * 30 * Math.PI) / 180;
          const radius = 70;
          const center = 88;
          return (
            <span
              key={num}
              className="absolute text-sm font-bold select-none"
              style={{
                left: `${center + radius * Math.sin(angle)}px`,
                top: `${center - radius * Math.cos(angle)}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {num}
            </span>
          );
        })}

        <div
          className="absolute w-1 h-12 bg-black left-1/2 top-1/2 origin-bottom"
          style={{
            transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`,
          }}
        />

        <div
          className="absolute w-1 h-16 bg-gray-700 left-1/2 top-1/2 origin-bottom"
          style={{
            transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)`,
          }}
        />

        
        <div
          className="absolute w-0.5 h-20 bg-red-500 left-1/2 top-1/2 origin-bottom"
          style={{
            transform: `translate(-50%, -100%) rotate(${secondDeg}deg)`,
          }}
        />
        <div className="absolute w-3 h-3 bg-black rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      
      <div className="text-sm text-gray-600 font-medium">
        {time.toLocaleDateString("ar-EG", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
}