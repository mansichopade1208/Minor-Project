import { Link } from "react-router-dom";
import "./EventGrid.css";

export default function EventGrid() {
  const categories = [
    {
      title: "Cultural Festivals",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
      slug: "cultural",
    },

    {
      title: "Music Events",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
      slug: "music",
    },

    {
      title: "Food Festivals",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
      slug: "food",
    },

    {
      title: "Religious Events",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
      slug: "religious",
    },

    {
      title: "Adventure Events",
      image:
        "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1200&auto=format&fit=crop",
      slug: "adventure",
    },

    {
      title: "Tribal Fairs",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      slug: "tribal",
    },
  ];

  return (
    <section className="event-grid-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Browse by Category</h2>

          <p className="text-muted">
            Discover unique experiences across Madhya Pradesh.
          </p>
        </div>

        {/* Category Cards */}
        <div className="row g-4">
          {categories.map((category, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <Link
                to={`/events/${category.slug}`}
                className="text-decoration-none"
              >
                <div className="category-card">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="img-fluid"
                  />

                  <div className="category-overlay">
                    <h3>{category.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
