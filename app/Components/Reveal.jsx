"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  duration = 900,
  y = 64,
  scale = 0.88,
  rotate = -1.5,
  blur = 6,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(node);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        "--reveal-y": `${y}px`,
        "--reveal-scale": scale,
        "--reveal-rotate": `${rotate}deg`,
        "--reveal-blur": `${blur}px`,
      }}
    >
      {children}
    </Tag>
  );
}
