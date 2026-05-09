import { useRef } from "react";
import "./PopularDestinations.css";

export default function PopularDestinations() {
  const scrollRef = useRef();

  // SCROLL LEFT
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  // SCROLL RIGHT
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  const destinations = [
    {
      name: "Khajuraho",
      description:
        "Ancient temples, stunning architecture and rich cultural heritage.",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    },

    {
      name: "Kanha National Park",
      description:
        "Dense forests, wildlife safaris and breathtaking biodiversity.",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    },

    {
      name: "Pachmarhi",
      description:
        "Waterfalls, caves and serene eco-tourism experiences in nature.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },

    {
      name: "Sanchi",
      description:
        "Historic Buddhist monuments and peaceful spiritual atmosphere.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },

    {
      name: "Mandu",
      description: "Majestic forts, Afghan architecture and timeless beauty.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    },

    {
      name: "Bhedaghat",
      description: "Marble rocks, river views and scenic natural landscapes.",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    },
  ];

  return (
    <section className="popular-destinations-section">
      <div className="container">
        {/* HEADING */}
        <div className="destinations-header">
          <div>
            <p className="destination-tag">Popular Destinations</p>

            <h2>Discover The Beauty Of Madhya Pradesh</h2>
          </div>
        </div>

        {/* DESTINATION CARDS */}
        <div className="destinations-wrapper" ref={scrollRef}>
          {destinations.map((destination, index) => (
            <div
              className="destination-card"
              key={index}
              style={{
                backgroundImage: `url(${destination.image})`,
              }}
            >
              <div className="destination-overlay">
                <div className="destination-content">
                  <h3>{destination.name}</h3>

                  <p>{destination.description}</p>

                  <span className="read-more">Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="destination-controls">
          {/* ARROWS */}
          <div className="slider-arrows">
            <button onClick={scrollLeft}>←</button>

            <button onClick={scrollRight}>→</button>
          </div>

          {/* BUTTON */}
          <button className="btn btn-outline-success explore-btn">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
