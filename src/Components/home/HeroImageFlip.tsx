import { useEffect, useRef } from "react";
import "./HeroImageFlip.scss";
import img1 from "../../assets/images/flip-img1.webp";
import img2 from "../../assets/images/flip-img2.webp";
import img3 from "../../assets/images/flip-img3.webp";
import img4 from "../../assets/images/flip-img4.webp";
import img5 from "../../assets/images/flip-img5.webp";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
];

const FLIP_DURATION = 2000;

const HeroImageFlip = () => {
  const stackRef = useRef<HTMLDivElement>(null);
  const animatingRef = useRef(false);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const moveCard = () => {
      if (animatingRef.current) return;
      animatingRef.current = true;

      const last = stack.lastElementChild as HTMLElement | null;
      if (!last) return;

      last.classList.add("is-moving", "images-flip-slider-swap");

      setTimeout(() => {
        last.classList.remove("images-flip-slider-swap", "is-moving");
        last.classList.add("is-back");

        stack.insertBefore(last, stack.firstElementChild);

        requestAnimationFrame(() => {
          last.classList.remove("is-back");
          animatingRef.current = false;
        });
      }, FLIP_DURATION);
    };

    const interval = setInterval(moveCard, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="images-flip-slider-stack" ref={stackRef}>
      {images.map((src, i) => (
        <div className="images-flip-slider-card" key={i}>
          <img src={src} alt={`Slide ${i + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default HeroImageFlip;
