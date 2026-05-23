import ExperienceLayout from "./ExperienceLayout";
import "./ExperienceDetails.css";

function EcoTourismDetail({ experience }) {
  return (
    <ExperienceLayout>
      {/* HERO */}
      <section className="experience-hero-expd">
        <img
          src={experience.image}
          alt={experience.title}
          className="hero-image-expd"
        />

        <div className="hero-overlay-expd">
          <div className="container">
            <div className="hero-content-expd">
              <p className="hero-subtitle-expd">ECO TOURISM</p>

              <h1>{experience.title}</h1>

              <p className="hero-location-expd">
                {experience.location || "Madhya Pradesh"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="experience-section-expd">
        <div className="container">
          <div className="experience-layout-expd">
            {/* LEFT */}
            <div className="experience-main-expd">
              <div className="section-block">
                <h2>Experience Overview</h2>
                <p>{experience.description}</p>
              </div>

              {/* FEATURES */}
              <div className="features-grid">
                <div className="feature-card">
                  <i className="fa-solid fa-clock"></i>
                  <h4>Duration</h4>
                  <p>{experience.duration}</p>
                </div>

                <div className="feature-card">
                  <i className="fa-solid fa-users"></i>
                  <h4>Group Size</h4>
                  <p>{experience.groupSize}</p>
                </div>

                <div className="feature-card">
                  <i className="fa-solid fa-wallet"></i>
                  <h4>Price</h4>
                  <p>{experience.price}</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="experience-sidebar-expd">
              <div className="sidebar-card">
                <h3>What's Included</h3>

                <div className="includes-list">
                  {(experience.includes || []).map((item, i) => (
                    <div className="include-item" key={i}>
                      <i className="fa-solid fa-check"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button className="explore-btn-expd">Explore Experience</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ExperienceLayout>
  );
}

export default EcoTourismDetail;
