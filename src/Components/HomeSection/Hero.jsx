import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "RESIDENTIAL DESIGN",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80&fit=crop",
    category: "Residential", // matches projects.js category exactly
  },
  {
    id: 2,
    title: "COMMERCIAL DESIGN",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80&fit=crop",
    category: "Commercial",
  },
  {
    id: 3,
    title: "LUXURY SPACES",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80&fit=crop",
    category: "LUXURY SPACES",
  },
];

// Props: onNavigate(category) — called when user clicks a slide
const Hero = ({ onNavigate }) => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const navigate = useNavigate();

  const goTo = useCallback(
    (index) => {
      if (animating || index === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 600);
    },
    [animating, current],
  );

  const prev = (e) => {
    e.stopPropagation();
    goTo((current - 1 + slides.length) % slides.length);
  };

  const next = (e) => {
    e.stopPropagation();
    goTo((current + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const handleSlideClick = () => {
    navigate("/projects", {
      state: {
        category: slides[current].category,
      },
    });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: index === current ? 1 : 0,
            zIndex: index === current ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === current ? "scale(1)" : "scale(1.05)",
              transition: "transform 6s ease-out, opacity 0.7s ease",
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Clickable overlay — whole slide is the CTA */}
      <div
        className="absolute inset-0 cursor-pointer"
        style={{ zIndex: 8 }}
        onClick={handleSlideClick}
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 pointer-events-none"
        style={{ zIndex: 10 }}
      >
        <div
          className={`transition-all duration-700 ${
            animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <h1
            className="text-white mb-6"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 3vw, 6rem)",
              letterSpacing: "0.15em",
              lineHeight: "1.1",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            {slides[current].title}
          </h1>

          {/* Explore CTA */}
          {/* <button
            className="pointer-events-auto mt-2 font-['Montserrat'] text-[11px] tracking-[0.3em] uppercase text-white border border-white/60 px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
            onClick={handleSlideClick}
          >
            Explore Projects
          </button> */}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white transition-all duration-200 hover:scale-110 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg width="36" height="14" viewBox="0 0 36 14" fill="none">
          <path
            d="M0 7H35M8 1L1 7L8 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white transition-all duration-200 hover:scale-110 focus:outline-none"
        aria-label="Next slide"
      >
        <svg width="36" height="14" viewBox="0 0 36 14" fill="none">
          <path
            d="M36 7H1M28 1L35 7L28 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goTo(index);
            }}
            className="focus:outline-none transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === current ? (
              <span className="flex items-center justify-center w-5 h-5">
                <span className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>
              </span>
            ) : (
              <span className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 block transition-colors duration-200" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
