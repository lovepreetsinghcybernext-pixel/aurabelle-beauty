import { useRef } from "react";
import gsap from "gsap";

const AnimatedButton = ({ children }: { children: React.ReactNode }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const onEnter = () => {
    gsap.to(btnRef.current, {
      scale: 1.08,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const onClick = () => {
    gsap.fromTo(
      btnRef.current,
      { scale: 0.95 },
      { scale: 1, duration: 0.2 }
    );
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="btn primary"
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
