import { useNavigate } from "react-router-dom";
import "./GalleryPreview.css";

export default function GalleryPreview() {
  const navigate = useNavigate();

  const galleryItems = [
    {
      type: "photo",
      title: "Nature Trails",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },

    {
      type: "photo",
      title: "Wildlife Safari",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    },

    {
      type: "video",
      title: "Folk Dance Festival",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    },

    {
      type: "photo",
      title: "Heritage Walk",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    },

    {
      type: "photo",
      title: "Local Cuisine",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
  ];

  return (
    <section className="gallery-preview-section">
      <div className="container">
        {/* HEADER */}
        <div className="gallery-preview-header">
          <div>
            <p className="gallery-tag">Gallery</p>

            <h2>Explore Moments & Memories</h2>
          </div>
        </div>

        {/* GRID */}
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              className={`gallery-card ${index === 0 ? "large-card" : ""}`}
              key={index}
            >
              {/* IMAGE */}
              <img src={item.image} alt={item.title} />

              {/* OVERLAY */}
              <div className="gallery-overlay">
                {/* VIDEO ICON */}
                {item.type === "video" && <div className="video-icon">▶</div>}

                <div className="gallery-content">
                  <h4>{item.title}</h4>

                  <span>View More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="gallery-controls">
          <button
            className="btn btn-outline-success gallery-btn"
            onClick={() => navigate("/gallery")}
          >
            Explore Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
