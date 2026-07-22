"use client";

import { useEffect, useRef, useState } from "react";

export default function SplitHeading({
  children,
  as: Tag = "span",
  className = "",
  wordDelay = 70,
  startDelay = 0,
}) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const words = String(children).split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="split-word"
          style={{
            animationDelay: started
              ? `${startDelay + index * wordDelay}ms`
              : "0ms",
            animationPlayState: started ? "running" : "paused",
            marginRight: "0.28em",
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}
