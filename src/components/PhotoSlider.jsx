
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

import { siteContent } from "../data/siteContent";

function PhotoSlider() {
  const photos = siteContent.photos;

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextPhoto = () => {
    setCurrentPhoto((previous) => (previous + 1) % photos.length);
  };

  const previousPhoto = () => {
    setCurrentPhoto(
      (previous) => (previous - 1 + photos.length) % photos.length
    );
  };

  useEffect(() => {
    if (paused || photos.length <= 1) return;

    const interval = setInterval(() => {
        setCurrentPhoto((previous) => (previous + 1) % photos.length);
    }, 6000);

    return () => clearInterval(interval);
    }, [paused, photos.length]);

  return (
    <section className="photo-section">

      <div className="section-heading">
        <span className="section-subtitle">
          BEYOND THE ORDINARY
        </span>

        <h2>A Life of Purpose</h2>

        <p>
          Moments, experiences and milestones.
        </p>
      </div>

      <div
        className="photo-slider"
        aria-roledescription="carousel"
        aria-label="Photo gallery"
      >

        {photos.map((photo, index) => (
          <div
            key={photo.image}
            className={`photo-slide ${
              currentPhoto === index ? "visible" : ""
            }`}
            aria-hidden={currentPhoto !== index}
          >
            <img
              src={photo.image}
              alt={photo.alt}
              loading={index === 0 ? "eager" : "lazy"}
            />

            <div className="photo-caption">
              <span>PERSONAL JOURNEY</span>
              <h3>{photo.caption}</h3>
            </div>
          </div>
        ))}

        <button
          className="slide-arrow previous"
          onClick={previousPhoto}
          aria-label="Previous photograph"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          className="slide-arrow next"
          onClick={nextPhoto}
          aria-label="Next photograph"
        >
          <ChevronRight size={28} />
        </button>

        <div className="photo-navigation">

          {photos.map((photo, index) => (
            <button
              key={photo.image}
              className={
                currentPhoto === index
                  ? "photo-dot selected"
                  : "photo-dot"
              }
              onClick={() => setCurrentPhoto(index)}
              aria-label={`Show photograph ${index + 1}`}
              aria-current={currentPhoto === index}
            />
          ))}

          <button
            className="photo-pause"
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
          >
            {paused ? <Play size={15} /> : <Pause size={15} />}
          </button>

        </div>

      </div>

    </section>
  );
}

export default PhotoSlider;
