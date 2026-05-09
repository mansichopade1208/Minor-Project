import "./HeroSection.css";

export default function HeroSection() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Explore Madhya Pradesh",
      text: "Discover nature, culture and heritage",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Experience Cultural Tourism",
      text: "Festivals, traditions and unforgettable journeys",
    },
    {
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      title: "Adventure Awaits",
      text: "Wildlife, forests and hidden destinations",
    },
  ];

  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
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
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="overlay">
                <div className="hero-content container">
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>

                  <div className="hero-buttons">
                    <button className="btn btn-success me-3">
                      Explore
                    </button>

                    <button className="btn btn-outline-light">
                      View Events
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
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}