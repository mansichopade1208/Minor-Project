import ExperienceLayout from "./ExperienceLayout";
import "./ExperienceDetails.css";

function CuisineDetail({ experience }) {
  return (
    <ExperienceLayout>
      <section className="experience-hero-expd">
        <img src={experience.image} className="hero-image-expd" />

        <div className="hero-overlay-expd">
          <div className="hero-content-expd">
            <p className="hero-subtitle-expd">CUISINE TRAILS</p>
            <h1>{experience.title}</h1>
            <p>{experience.location}</p>
          </div>
        </div>
      </section>

      <section className="experience-section-expd">
        <div className="container">
          <div className="section-block">
            <h2>Food Journey</h2>
            <p>{experience.description}</p>
          </div>

          <div className="gallery-grid">
            {(experience.gallery || []).map((img, i) => (
              <img key={i} src={img} />
            ))}
          </div>
        </div>
      </section>
    </ExperienceLayout>
  );
}

export default CuisineDetail;
