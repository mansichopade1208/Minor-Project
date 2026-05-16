import "./EventDetailPage.css";

function EventDetailPage() {
  const event = {
    title: "Khajuraho Dance Festival",
    location: "Khajuraho, Madhya Pradesh",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865",
    date: "20 February 2026",
    time: "6:00 PM Onwards",
    description:
      "Experience the grandeur of classical Indian dance performances set against the magnificent backdrop of the Khajuraho temples. The festival brings together renowned artists from across the country, celebrating India’s cultural heritage through music, dance, and art.",
    highlights: [
      "Classical Dance Performances",
      "Live Folk Music",
      "Traditional Food Stalls",
      "Cultural Exhibitions",
      "Evening Light Shows",
      "Photography Spots",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    ],
  };

  return (
    <div className="event-page-evtd">
      {/* HERO */}
      <section className="event-hero-evtd">
        <img
          src={event.image}
          alt={event.title}
          className="event-hero-image-evtd"
        />

        <div className="event-overlay-evtd">
          <div className="container">
            <div className="event-hero-content-evtd">
              <p className="event-subtitle-evtd">
                CULTURAL EVENT
              </p>

              <h1>{event.title}</h1>

              <p className="event-location-evtd">
                📍 {event.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="event-section-evtd">
        <div className="container">
          <div className="event-layout-evtd">
            {/* LEFT */}
            <div className="event-main-evtd">
              <div className="event-block-evtd">
                <h2>About The Event</h2>

                <p>{event.description}</p>
              </div>

              {/* EVENT INFO */}
              <div className="event-info-grid-evtd">
                <div className="event-info-card-evtd">
                  <i className="fa-solid fa-calendar-days"></i>

                  <h4>Date</h4>

                  <p>{event.date}</p>
                </div>

                <div className="event-info-card-evtd">
                  <i className="fa-solid fa-clock"></i>

                  <h4>Time</h4>

                  <p>{event.time}</p>
                </div>

                <div className="event-info-card-evtd">
                  <i className="fa-solid fa-location-dot"></i>

                  <h4>Venue</h4>

                  <p>{event.location}</p>
                </div>
              </div>

              {/* GALLERY */}
              <div className="event-block-evtd">
                <h2>Event Gallery</h2>

                <div className="event-gallery-evtd">
                  {event.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="event-sidebar-evtd">
              <div className="event-sidebar-card-evtd">
                <h3>Event Highlights</h3>

                <div className="highlights-list-evtd">
                  {event.highlights.map((item, index) => (
                    <div
                      className="highlight-item-evtd"
                      key={index}
                    >
                      <i className="fa-solid fa-check"></i>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button className="event-btn-evtd">
                  Register Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetailPage;