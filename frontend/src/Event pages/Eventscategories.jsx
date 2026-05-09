import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventsCategories.css";

const categories = [
  {
    id: 1,
    label: "Music",
    slug: "music",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  },
  {
    id: 2,
    label: "Adventure",
    slug: "adventure",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
  },
  {
    id: 3,
    label: "Culture",
    slug: "culture",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
  },
  {
    id: 4,
    label: "Food & Drink",
    slug: "food",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
  {
    id: 5,
    label: "Sports",
    slug: "sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
  },
  {
    id: 6,
    label: "Art",
    slug: "art",
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366a1a0?w=600&q=80",
  },
  {
    id: 7,
    label: "Nightlife",
    slug: "nightlife",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&q=80",
  },
  {
    id: 8,
    label: "Outdoor",
    slug: "outdoor",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
  },
];

const EventsCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="events-categories">
      <div className="container">

        <div className="events-categories__header">
          <h2 className="events-categories__title">Browse by Category</h2>
          <p className="events-categories__subtitle">What kind of experience are you looking for?</p>
        </div>

        <div className="row g-3">
          {categories.map((cat) => (
            <div className="col-6 col-md-3" key={cat.id}>
              <div
                className="category-card"
                onClick={() => navigate(`/events/${cat.slug}`)}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="category-card__img"
                />
                <div className="category-card__overlay" />
                <div className="category-card__label">
                  <span>{cat.label}</span>
                  <span className="category-card__arrow">›</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventsCategories;