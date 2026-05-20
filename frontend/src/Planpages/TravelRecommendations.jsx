import React, { useMemo } from "react";
import "./TravelRecommendations.css";

function TravelRecommendations({ weatherData }) {
  const current = weatherData?.current;

  const temp = current?.main?.temp;
  const condition = current?.weather?.[0]?.main;
  const wind = current?.wind?.speed;
  const humidity = current?.main?.humidity;

  const recommendations = useMemo(() => {
    const list = [];

    // TEMP BASED
    if (temp >= 35) {
      list.push({
        icon: "☀️",
        title: "Extreme Heat Alert",
        text: "Avoid outdoor activities during afternoon. Prefer mornings or evenings.",
      });
    } else if (temp >= 28) {
      list.push({
        icon: "😎",
        title: "Warm Weather",
        text: "Good for sightseeing but carry sunscreen and stay hydrated.",
      });
    } else {
      list.push({
        icon: "🌤️",
        title: "Pleasant Weather",
        text: "Perfect climate for long outdoor exploration and walking tours.",
      });
    }

    // RAIN BASED
    if (condition === "Rain" || condition === "Drizzle") {
      list.push({
        icon: "🌧️",
        title: "Rain Expected",
        text: "Carry umbrella and prefer indoor attractions like museums or cafes.",
      });
    }

    // WIND BASED
    if (wind > 8) {
      list.push({
        icon: "💨",
        title: "Windy Conditions",
        text: "Be cautious near open areas and water activities.",
      });
    }

    // HUMIDITY
    if (humidity > 70) {
      list.push({
        icon: "💧",
        title: "High Humidity",
        text: "Weather may feel sticky. Wear light cotton clothes.",
      });
    }

    // GOOD CONDITIONS (fallback)
    if (list.length === 0) {
      list.push({
        icon: "📸",
        title: "Great Travel Conditions",
        text: "Perfect weather for outdoor activities, sightseeing, and photography.",
      });
    }

    return list;
  }, [temp, condition, wind, humidity]);

  return (
    <section className="travel-rec-section">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="travel-rec-heading text-center">
          <span>Smart Insights</span>

          <h2>Weather Based Travel Recommendations</h2>

          <p>AI-style suggestions based on real-time weather conditions.</p>
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
