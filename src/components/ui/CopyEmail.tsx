"use client";

import { useEffect, useRef, useState } from "react";

import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/** Copy-to-clipboard button with a short confirmation state. */
export default function CopyEmail({
  email,
  className,
  label = "Copy email",
}: {
  email: string;
  className?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const area = document.createElement("textarea");
      area.value = email;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={cn("btn btn-ghost", className)}
      aria-live="polite"
    >
      <Icon name={copied ? "check" : "copy"} size={15} />
      {copied ? "Copied" : label}
    </button>
  );
}
