import { useEffect, useRef } from "react";
import "./ScrollText.scss";

type Props = {
  text: string;
};

const ScrollText = ({ text }: Props) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Split text into spans
    const chars = text.split("");
    el.innerHTML = chars
      .map((char) =>
        char === " "
          ? `<span class="space">&nbsp;</span>`
          : `<span>${char}</span>`
      )
      .join("");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const spans = el.querySelectorAll("span");
          spans.forEach((span, i) => {
            span.style.animationDelay = `${i * 0.08}s`;
            span.classList.add("animate");
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [text]);

  return <div ref={textRef} className="scroll-text" />;
};

export default ScrollText;
