import React from "react";
import "./WeeklyForecast.css";

function WeeklyForecast() {
  const weeklyData = [
    { day: "Mon", icon: "☀️", high: "34°", low: "24°" },
    { day: "Tue", icon: "🌤️", high: "33°", low: "23°" },
    { day: "Wed", icon: "🌧️", high: "29°", low: "22°" },
    { day: "Thu", icon: "⛅", high: "31°", low: "23°" },
    { day: "Fri", icon: "☀️", high: "35°", low: "25°" },
    { day: "Sat", icon: "🌦️", high: "30°", low: "22°" },
    { day: "Sun", icon: "☀️", high: "34°", low: "24°" },
  ];

  return (
    <section className="weekly-section">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="weekly-heading text-center">
          <span>Extended Forecast</span>
          <h2>7 Day Weather Outlook</h2>
        </div>

        {/* WEEKLY CARDS */}
        <div className="weekly-cards-wrapper">
          {weeklyData.map((item, index) => (
            <div className="weekly-card" key={index}>
              <h5>{item.day}</h5>

              <div className="weekly-icon">{item.icon}</div>

              <h3>{item.high}</h3>

              <p>{item.low}</p>
            </div>
          ))}
        </div>

        {/* BEST TIME SECTION */}
        <div className="best-time-card">
          <div className="row align-items-center">
            {/* LEFT */}
            <div className="col-lg-6">
              <div className="best-time-image">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1974&auto=format&fit=crop"
                  alt="Travel"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6">
              <div className="best-time-content">
                <span>Travel Recommendation</span>

                <h2>Best Time To Visit</h2>

                <p>
                  November to February offers the most pleasant climate for
                  sightseeing, outdoor experiences, and cultural exploration.
                </p>

                <div className="travel-info-grid">
                  <div>
                    <h5>Peak Season</h5>
                    <p>Nov - Feb</p>
                  </div>

                  <div>
                    <h5>Monsoon</h5>
                    <p>Jun - Sep</p>
                  </div>

                  <div>
                    <h5>Ideal For</h5>
                    <p>Outdoor Travel</p>
                  </div>

                  <div>
                    <h5>Temperature</h5>
                    <p>18° - 28°</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeeklyForecast;
