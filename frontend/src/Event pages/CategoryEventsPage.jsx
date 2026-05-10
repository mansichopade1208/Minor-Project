import { useParams } from "react-router-dom";
import "./CategoryEventsPage.css";

export default function CategoryEventsPage() {
  const { category } = useParams();

  // Temporary Dummy Data
  const events = [
    {
      id: 1,
      title: "Folk Music Festival",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
      category: "music",
    },

    {
      id: 2,
      title: "Classical Night Concert",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
      category: "music",
    },

    {
      id: 3,
      title: "Tribal Dance Celebration",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
      category: "cultural",
    },

    {
      id: 4,
      title: "Street Food Carnival",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
      category: "food",
    },
  ];

  // Filter Events by Category
  const filteredEvents = events.filter((event) => event.category === category);

  return (
    <div className="category-page">
      {/* HERO SECTION */}
      <section className="category-hero">
        <div className="container text-center text-white">
          <h1 className="category-title">
            {category.charAt(0).toUpperCase() + category.slice(1)} Events
          </h1>

          <p className="category-description">
            Explore unforgettable experiences and celebrations across Madhya
            Pradesh.
          </p>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="category-events py-5">
        <div className="container">
          <div className="row g-4">
            {filteredEvents.map((event) => (
              <div className="col-md-6 col-lg-4" key={event.id}>
                <div className="event-portrait-card">
                  <img src={event.image} alt={event.title} />

                  <div className="event-overlay">
                    <h3>{event.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
