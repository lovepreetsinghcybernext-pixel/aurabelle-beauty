import { useEffect, useRef, useState } from "react";
import "./CustomCursor.scss";

const CustomCursor = () => {
  // Disable cursor on mobile
  if (window.innerWidth < 768) return null;

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(true);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
  const onMouseMove = (e: MouseEvent) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
    setVisible(true);
  };

  const onMouseOut = (e: MouseEvent) => {
    // When leaving the browser window
    if (
      !e.relatedTarget &&
      (e.clientX <= 0 ||
        e.clientY <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight)
    ) {
      setVisible(false);
    }
  };

  const animate = () => {
    pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
    pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `
        translate3d(${pos.current.x}px, ${pos.current.y}px, 0)
      `;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  requestRef.current = requestAnimationFrame(animate);

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseout", onMouseOut);

  return () => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseout", onMouseOut);
  };
}, []);


  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isPointer ? "pointer" : ""} ${
        !visible ? "hidden" : ""
      }`}
    />
  );
};

export default CustomCursor;
