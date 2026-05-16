import "./ExperienceDetails.css";

function ExperienceDetails() {
  const experience = {
    title: "Local Cuisine Trails",
    location: "Madhya Pradesh, India",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    description:
      "Explore the authentic flavors of Madhya Pradesh through carefully curated culinary trails. Experience traditional recipes, local markets, tribal delicacies, and unforgettable cultural dining moments across scenic locations.",
    duration: "3 Days",
    groupSize: "12 People",
    price: "₹4,500 per person",
    includes: [
      "Traditional Food Tastings",
      "Local Guide",
      "Village Visits",
      "Transportation",
      "Photography Stops",
      "Cultural Activities",
    ],
  };

  return (
    <div className="experience-page-detail">
      {/* HERO SECTION */}
      <section className="experience-hero-expd">
        <img
          src={experience.image}
          alt={experience.title}
          className="hero-image-expd"
        />

        <div className="hero-overlay-expd">
          <div className="container">
            <div className="hero-content-expd">
              <p className="hero-subtitle-expd">
                EXPERIENCES
              </p>

              <h1>{experience.title}</h1>

              <p className="hero-location-expd">
                {experience.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
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

              {/* GALLERY */}
              <div className="section-block">
                <h2>Experience Gallery</h2>

                <div className="gallery-grid">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                    alt=""
                  />

                  <img
                    src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
                    alt=""
                  />

                  <img
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="experience-sidebar-expd">
              <div className="sidebar-card">
                <h3>What's Included</h3>

                <div className="includes-list">
                  {experience.includes.map((item, index) => (
                    <div className="include-item" key={index}>
                      <i className="fa-solid fa-check"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button className="explore-btn-expd">
                  Explore Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExperienceDetails;