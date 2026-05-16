import React from "react";
import "./WeatherHero.css";

function WeatherHero() {
  return (
    <section className="weather-hero">
      <div className="weather-overlay"></div>

      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">

          {/* LEFT CONTENT */}
          <div className="col-lg-7">
            <div className="weather-hero-content">

              <span className="weather-tag">
                Live Weather Insights
              </span>

              <h1>
                Plan Your Journey <br />
                With Confidence
              </h1>

              <p>
                Get real-time forecasts, travel recommendations,
                and weather-based experiences for your destination.
              </p>

              {/* SEARCH */}
              <div className="weather-search-box">
                <input
                  type="text"
                  placeholder="Search destination..."
                />

                <button>
                  Search
                </button>
              </div>

              {/* QUICK CHIPS */}
              <div className="weather-chips">
                <span>Bhopal</span>
                <span>Indore</span>
                <span>Goa</span>
                <span>Jaipur</span>
                <span>Pachmarhi</span>
              </div>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="col-lg-5 d-flex justify-content-center">
            <div className="weather-preview-card">

              <div className="weather-temp">
                32°
              </div>

              <h3>Bhopal, India</h3>

              <p>Sunny</p>

              <div className="weather-info-grid">
                <div>
                  <span>Humidity</span>
                  <h5>48%</h5>
                </div>

                <div>
                  <span>Wind</span>
                  <h5>10 km/h</h5>
                </div>

                <div>
                  <span>Feels Like</span>
                  <h5>35°</h5>
                </div>

                <div>
                  <span>UV Index</span>
                  <h5>5</h5>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WeatherHero;