import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HeroBanner({
  images = [],
  title = "Title",
  lead = "Lead",
  itemsLabel = "Go to Items",
  contactLabel = "Contact us",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentIndex] || "";

  return (
    <section
      className="hero-banner d-flex flex-column justify-content-center align-items-center text-center text-white"
      style={{
        backgroundImage: `url(${currentImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "2rem", borderRadius: "12px" }}>
        <h1 className="display-3 fw-bold">{title}</h1>
        <p className="lead">{lead}</p>
        <div className="mt-4">
          <Link to="/items" className="btn btn-netflix me-3">
            {itemsLabel}
          </Link>
          <Link to="/contact" className="btn btn-outline-light">
            {contactLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
