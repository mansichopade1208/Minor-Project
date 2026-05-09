import "./TrendingEvents.css";

export default function TrendingEvents() {
  const events = [
    {
      title: "Khajuraho Dance Festival",
      date: "12 Feb 2026",
      location: "Khajuraho",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
      description:
        "Experience classical dance performances beside ancient temples.",
      featured: true,
    },
    {
      title: "Tribal Art Fair",
      date: "20 March 2026",
      location: "Bhopal",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
      description:
        "Discover tribal paintings, crafts and folk traditions.",
    },
    {
      title: "Food & Culture Carnival",
      date: "5 April 2026",
      location: "Indore",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      description:
        "Taste authentic cuisine and enjoy cultural performances.",
    },
  ];

  const featuredEvent = events.find((e) => e.featured);
  const sideEvents = events.filter((e) => !e.featured);

  return (
    <section className="trending-events py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Trending Events</h2>
          <p className="section-subtitle">
            Explore the most exciting cultural events
          </p>
        </div>

        <div className="row g-4">
          {/* Featured Event */}
          <div className="col-lg-7">
            <div
              className="featured-event"
              style={{
                backgroundImage: `url(${featuredEvent.image})`,
              }}
            >
              <div className="event-overlay">
                <div className="event-content">
                  <span className="event-date">
                    {featuredEvent.date}
                  </span>

                  <h2>{featuredEvent.title}</h2>

                  <p>{featuredEvent.description}</p>

                  <button className="btn btn-success">
                    Explore Event
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Events */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-4">
              {sideEvents.map((event, index) => (
                <div
                  key={index}
                  className="side-event"
                  style={{
                    backgroundImage: `url(${event.image})`,
                  }}
                >
                  <div className="event-overlay">
                    <div className="event-content">
                      <span className="event-date">
                        {event.date}
                      </span>

                      <h4>{event.title}</h4>

                      <p>{event.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}