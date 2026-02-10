import { useState, useEffect } from "react";
import "../Styles/Gallery.scss";

const galleryImages = [
  { id: 1, category: "Hair", src: "/src/assets/images/expert1.jpg" },
  { id: 2, category: "Hair", src: "/src/assets/images/expert2.jpg" },
  { id: 3, category: "Spa", src: "/src/assets/images/expert3.jpg" },
  { id: 4, category: "Spa", src: "/src/assets/images/expert2.jpg" },
  { id: 5, category: "Makeup", src: "/src/assets/images/expert3.jpg" },
  { id: 6, category: "Makeup", src: "/src/assets/images/expert1.jpg" },
];

const categories = ["All", "Hair", "Spa", "Makeup"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  const nextImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev! === filteredImages.length - 1 ? 0 : prev! + 1
    );
  };

  const prevImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev! === 0 ? filteredImages.length - 1 : prev! - 1
    );
  };

  return (
    <section className="gallery-page">
      <div className="container">

        {/* Header */}
        <div className="gallery-header">
          <h1>Our Gallery</h1>
          <p>
            Explore our latest transformations, beauty moments,
            and wellness experiences.
          </p>
        </div>

        {/* Filters */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {filteredImages.map((img, index) => (
            <div
              className="gallery-item"
              key={img.id}
              onClick={() => setActiveIndex(index)}
            >
              <img src={img.src} alt={img.category} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Popup */}
      {activeIndex !== null && (
        <div className="gallery-lightbox" onClick={() => setActiveIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setActiveIndex(null)}>
              ✕
            </button>

            <button className="nav prev" onClick={prevImage}>
              ‹
            </button>

            <img
              src={filteredImages[activeIndex].src}
              alt="Gallery Preview"
            />

            <button className="nav next" onClick={nextImage}>
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
