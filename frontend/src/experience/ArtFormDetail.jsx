import ExperienceLayout from "./ExperienceLayout";
import "./ExperienceDetails.css";

function ArtFormDetail({ experience }) {
  return (
    <ExperienceLayout>
      <section className="experience-hero-expd">
        <img src={experience.image} className="hero-image-expd" />

        <div className="hero-overlay-expd">
          <div className="hero-content-expd">
            <p className="hero-subtitle-expd">ART & CULTURE</p>
            <h1>{experience.title}</h1>
            <p>{experience.location}</p>
          </div>
        </div>
      </section>

      <section className="experience-section-expd">
        <div className="container">
          <div className="section-block">
            <h2>Artform & Cultural Heritage</h2>
            <p>{experience.description}</p>
          </div>

          {/* culture inside artform */}
          {experience.subType === "culture" && (
            <div className="section-block">
              <h2>Traditions & Heritage</h2>
              <p>{experience.cultureInfo}</p>
            </div>
          )}

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

export default ArtFormDetail;
