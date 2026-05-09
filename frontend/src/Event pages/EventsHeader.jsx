import "./EventsHeader.css";

const EventsHeader = () => {
  return (
    <section className="events-header">
      <img
        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1400&q=80"
        alt="Events"
        className="events-header__img"
      />
      <div className="events-header__overlay" />
      <div className="events-header__content">
        <h1 className="events-header__title">Events</h1>
        <p className="events-header__subtitle">
          Browse events by category — music, adventure, culture, food and more.
        </p>
      </div>
    </section>
  );
};

export default EventsHeader;