import { useRef } from "react";
import "./UpcomingEvents.css";

export default function UpcomingEvents() {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  const events = [
    {
      name: "Khajuraho Dance Festival",
      type: "Cultural Festival",
      location: "Khajuraho",
      date: "12 Feb 2026",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    },

    {
      name: "Tribal Art Fair",
      type: "Art & Culture",
      location: "Bhopal",
      date: "20 Mar 2026",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    },

    {
      name: "Folk Music Festival",
      type: "Music Festival",
      location: "Jabalpur",
      date: "5 Apr 2026",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    },

    {
      name: "Local Cuisine Carnival",
      type: "Food Festival",
      location: "Indore",
      date: "18 Apr 2026",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },

    {
      name: "Wildlife Photography Camp",
      type: "Eco Tourism",
      location: "Kanha",
      date: "2 May 2026",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    },

    {
      name: "Nature Trail Meetup",
      type: "Adventure",
      location: "Pachmarhi",
      date: "14 May 2026",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },

    {
      name: "Heritage Walk",
      type: "Heritage",
      location: "Sanchi",
      date: "28 May 2026",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    },

    {
      name: "Village Tourism Fair",
      type: "Cultural Tourism",
      location: "Mandu",
      date: "10 Jun 2026",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },
  ];

  return (
    <section className="upcoming-events-section">
      <div className="container">
        {/* HEADER */}
        <div className="section-header">
          <div>
            <p className="event-tag">Upcoming Events</p>

            <h2>Explore Festivals & Cultural Events</h2>
          </div>
        </div>

        {/* EVENTS */}
        <div className="events-scroll-wrapper" ref={scrollRef}>
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              {/* IMAGE */}
              <div
                className="event-image"
                style={{
                  backgroundImage: `url(${event.image})`,
                }}
              >
                <div className="date-badge">{event.date}</div>
              </div>

              {/* CONTENT */}
              <div className="event-content">
                <p className="event-type">{event.type}</p>

                <h4>{event.name}</h4>

                <p className="event-location">{event.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="events-controls">
          {/* ARROWS */}
          <div className="slider-arrows">
            <button onClick={scrollLeft}>←</button>

            <button onClick={scrollRight}>→</button>
          </div>

          {/* BUTTON */}
          <button className="btn btn-outline-success explore-events-btn">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
