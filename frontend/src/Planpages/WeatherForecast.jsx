import React from "react";
import "./WeatherForecast.css";

function WeatherForecast() {
  const hourlyData = [
    { time: "10 AM", temp: "31°", icon: "☀️" },
    { time: "12 PM", temp: "34°", icon: "🌤️" },
    { time: "2 PM", temp: "35°", icon: "☀️" },
    { time: "4 PM", temp: "33°", icon: "🌥️" },
    { time: "6 PM", temp: "29°", icon: "🌦️" },
    { time: "8 PM", temp: "27°", icon: "🌧️" },
  ];

  return (
    <section className="weather-forecast-section">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="forecast-heading text-center">
          <span>Live Forecast</span>
          <h2>Today's Weather Details</h2>
        </div>

        <div className="row g-4 align-items-stretch">

          {/* HOURLY FORECAST */}
          <div className="col-lg-8">
            <div className="hourly-forecast-card">

              <div className="forecast-top">
                <h3>Hourly Forecast</h3>
                <p>Updated every hour</p>
              </div>

              <div className="hourly-scroll">

                {hourlyData.map((item, index) => (
                  <div className="hour-card" key={index}>
                    <span>{item.time}</span>

                    <div className="forecast-icon">
                      {item.icon}
                    </div>

                    <h4>{item.temp}</h4>
                  </div>
                ))}

              </div>

            </div>
          </div>

          {/* WEATHER DETAILS */}
          <div className="col-lg-4">
            <div className="weather-details-card">

              <h3>Weather Highlights</h3>

              <div className="details-grid">

                <div className="detail-box">
                  <span>Sunrise</span>
                  <h5>6:02 AM</h5>
                </div>

                <div className="detail-box">
                  <span>Sunset</span>
                  <h5>6:48 PM</h5>
                </div>

                <div className="detail-box">
                  <span>Humidity</span>
                  <h5>48%</h5>
                </div>

                <div className="detail-box">
                  <span>Wind</span>
                  <h5>10 km/h</h5>
                </div>

                <div className="detail-box">
                  <span>AQI</span>
                  <h5>78</h5>
                </div>

                <div className="detail-box">
                  <span>UV Index</span>
                  <h5>5 Moderate</h5>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WeatherForecast;