import { useNavigate } from "react-router-dom";

export default function HomeGallery() {
  const navigate = useNavigate();

  const previewMedia = [
    { type: "image", url: "img1.jpg", title: "Sunset Beach" },
    { type: "image", url: "img2.jpg", title: "Heritage Temple" },
    { type: "video", url: "vid1.mp4", title: "Festival Dance" },
    { type: "image", url: "img3.jpg", title: "Forest Trail" },
    { type: "image", url: "img4.jpg", title: "Mountain View" },
    { type: "image", url: "img5.jpg", title: "Cultural Art" },
  ];

  return (
    <section className="home-gallery">

      {/* Header */}
      <div className="gallery-header">
        <h2>Gallery</h2>

        <button
          className="explore-btn"
          onClick={() => navigate("/gallery")}
        >
          Explore Gallery
        </button>
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {previewMedia.map((item, index) => (
          <div key={index} className="media-card">

            {item.type === "image" ? (
              <img src={item.url} alt={item.title} />
            ) : (
              <video src={item.url} muted />
            )}

            <div className="overlay">
              {item.title}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}