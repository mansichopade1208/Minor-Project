import React from "react";
import "./TravelRecommendations.css";

function TravelRecommendations() {
  const recommendations = [
    {
      icon: "☀️",
      title: "Carry Sunscreen",
      text: "UV levels are moderate to high during afternoon hours.",
    },

    {
      icon: "🚶",
      title: "Ideal For Evening Walks",
      text: "Pleasant sunset temperatures make evenings perfect outdoors.",
    },

    {
      icon: "💧",
      title: "Stay Hydrated",
      text: "Temperatures may rise during the day. Carry water while exploring.",
    },

    {
      icon: "📸",
      title: "Great Visibility",
      text: "Clear skies provide excellent conditions for sightseeing and photography.",
    },

    {
      icon: "⛵",
      title: "Perfect For Boating",
      text: "Low wind speeds and calm conditions are favorable for water activities.",
    },

    {
      icon: "🌦️",
      title: "Light Rain Expected",
      text: "Keep a light jacket or umbrella for late evening showers.",
    },
  ];

  return (
    <section className="travel-rec-section">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="travel-rec-heading text-center">
          <span>Smart Insights</span>

          <h2>Weather Based Travel Recommendations</h2>

          <p>
            Personalized suggestions to help you plan better experiences based
            on current weather conditions.
          </p>
        </div>

        {/* CARDS */}
        <div className="row g-4">
          {recommendations.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="travel-rec-card">
                <div className="travel-rec-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelRecommendations;
