import "./HeroSection.css";

export default function HeroSection() {
  const slides = [
    {
      type: "video",
      src: "/videos/khajuraho.mp4",
      title: "Roots of Incredible India",
      text: "Temples, traditions and timeless stories of Madhya Pradesh",
    },
    {
      type: "video",
      src: "/videos/kanha.mp4",
      title: "Into the Wild Heart",
      text: "Explore forests, wildlife and untouched natural beauty",
    },
    {
      type: "image",
      src: "/images/culture.jpg",
      title: "Culture You Can Feel",
      text: "Festivals, folk art and vibrant traditions across the state",
    },
  ];

  return (
    <div
      id="heroCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="hero-slide-hhero">
              {/* VIDEO */}
              {slide.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="hero-media-hhero"
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <div
                  className="hero-media-hhero"
                  style={{
                    backgroundImage: `url(${slide.src})`,
                  }}
                ></div>
              )}

              {/* Overlay */}
              <div className="overlay-hhero">
                <div className="hero-content-hhero container">
                  <span className="hero-tag-hhero">
                    Explore Madhya Pradesh
                  </span>

                  <h1>{slide.title}</h1>

                  <p>{slide.text}</p>

                  <div className="hero-buttons-hhero">
                    <button className="btn btn-success me-3">
                      Explore Now
                    </button>

                    <button className="btn btn-outline-light">
                      Discover Events
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev hero-control-hhero"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next hero-control-hhero"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}