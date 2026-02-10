import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./FlairButton.scss";

type Props = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
};

const FlairButton = ({
  label,
  onClick,
  variant = "primary",
}: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const flairRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;

    if (!button || !flair) return;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const getXY = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      return {
        x: gsap.utils.clamp(0, 100, x),
        y: gsap.utils.clamp(0, 100, y),
      };
    };

    const onEnter = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      gsap.killTweensOf(flair); // 🔥 IMPORTANT
      xSet(x);
      ySet(y);

      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onMove = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.35,
        ease: "power2",
        overwrite: "auto",
      });
    };

    const onLeave = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      gsap.killTweensOf(flair); // 🔥 CRITICAL FIX

      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        scale: 0,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
        onComplete: () => {
          gsap.set(flair, { scale: 0 }); // 💯 HARD RESET
        },
      });
    };

    button.addEventListener("mouseenter", onEnter);
    button.addEventListener("mousemove", onMove);
    button.addEventListener("mouseleave", onLeave);

    return () => {
      button.removeEventListener("mouseenter", onEnter);
      button.removeEventListener("mousemove", onMove);
      button.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`flair-button ${variant}`}
      onClick={onClick}
    >
      <span ref={flairRef} className="button__flair" />
      <span className="button__label">{label}</span>
    </button>
  );
};

export default FlairButton;