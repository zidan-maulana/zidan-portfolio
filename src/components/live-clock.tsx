"use client";

import { useEffect, useState } from "react";

interface LiveClockProps {
  timezone?: string;
  location?: string;
}

export function LiveClock({
  timezone = "Asia/Jakarta",
  location = "Jakarta",
}: LiveClockProps) {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const updateClock = () => {
      const now = new Date();
      setTimeString(formatter.format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div
      className="inline-flex items-center text-[13px] select-none"
      aria-label={`Waktu saat ini di ${location}`}
    >
      <span className="tabular-nums font-medium text-text">
        {timeString || "--:--:--"}
      </span>
      <span className="ml-1.5 text-muted font-normal">
        {location}
      </span>
    </div>
  );
}
