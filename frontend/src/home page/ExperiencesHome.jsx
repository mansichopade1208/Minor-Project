import { useState } from "react";
import "./ExperiencesHome.css";
import { Link } from "react-router-dom";

export default function Experiences() {
  const experiences = [
    {
      title: "Local Cuisine Trails",
      description:
        "Experience authentic flavors and traditional recipes from local communities.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },

    {
      title: "Wildlife Safari",
      description:
        "Explore forests and witness majestic wildlife in their natural habitat.",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    },

    {
      title: "Heritage Walks",
      description:
        "Walk through ancient temples, forts and UNESCO heritage sites.",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    },

    {
      title: "Tribal Art Workshops",
      description:
        "Learn traditional tribal art and handicrafts from local artisans.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },

    {
      title: "Nature Trails",
      description:
        "Discover rivers, forests and eco-tourism destinations across Madhya Pradesh.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // NEXT
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  // PREVIOUS
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  // ACTIVE CARD
  const activeExperience = experiences[activeIndex];

  // SECOND CARD
  const secondCard =
    experiences[activeIndex === experiences.length - 1 ? 0 : activeIndex + 1];

  return (
    <section className="experiences-section">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-5">
            <div className="experience-details">
              <p className="experience-tag">Unique Experiences</p>

              <h2>{activeExperience.title}</h2>

              <p className="experience-description">
                {activeExperience.description}
              </p>

              <Link to="/experiences">
                <button className="btn btn-success explore-btn">
                  Explore More
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7">
            <div className="experience-slider">
              {/* CARDS */}
              <div className="cards-wrapper">
                {/* ACTIVE CARD */}
                <div
                  className="experience-card active-card"
                  style={{
                    backgroundImage: `url(${activeExperience.image})`,
                  }}
                >
                  <div className="card-overlay">
                    <div>
                      <h4>{activeExperience.title}</h4>

                      <p>{activeExperience.description}</p>
                    </div>
                  </div>
                </div>

                {/* SECOND CARD */}
                <div
                  className="experience-card"
                  style={{
                    backgroundImage: `url(${secondCard.image})`,
                  }}
                >
                  <div className="card-overlay">
                    <div>
                      <h4>{secondCard.title}</h4>

                      <p>{secondCard.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="slider-buttons">
                <button onClick={prevSlide}>←</button>

                <button onClick={nextSlide}>→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
