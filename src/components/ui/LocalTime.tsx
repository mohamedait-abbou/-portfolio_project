"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Casablanca",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

let cachedKey = "";
let cachedTime = "—:—";

function snapshot() {
  const now = new Date();
  const key = `${now.getUTCFullYear()}-${now.getUTCMonth()}-${now.getUTCDate()}-${now.getUTCHours()}-${now.getUTCMinutes()}`;
  if (key !== cachedKey) {
    cachedKey = key;
    cachedTime = formatter.format(now);
  }
  return cachedTime;
}

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 20_000);
  return () => window.clearInterval(id);
}

export default function LocalTime({
  className = "",
  label = "Marrakech",
  dot = true,
}: {
  className?: string;
  label?: string;
  dot?: boolean;
}) {
  const time = useSyncExternalStore(subscribe, snapshot, () => "—:—");

  return (
    <span className={`inline-flex items-center gap-2 tabular-nums ${className}`}>
      {dot && <span className="status-dot live" aria-hidden="true" />}
      {label && <span>{label}</span>}
      <span className="text-ink">{time}</span>
      <span className="sr-only">local time, GMT+1</span>
    </span>
  );
}
