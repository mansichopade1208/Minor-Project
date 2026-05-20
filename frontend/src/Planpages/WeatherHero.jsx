import React, { useState } from "react";
import "./WeatherHero.css";

function WeatherHero({ weatherData, onSearch }) {
  const [city, setCity] = useState("");

  // extract API values (OpenWeatherMap)
  const temp = weatherData?.current?.main?.temp;
  const cityName = weatherData?.current?.name;
  const condition = weatherData?.current?.weather?.[0]?.main;
  const humidity = weatherData?.current?.main?.humidity;
  const wind = weatherData?.current?.wind?.speed;
  const feelsLike = weatherData?.current?.main?.feels_like;

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <section className="weather-hero">
      <div className="weather-overlay"></div>

      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">
          {/* LEFT CONTENT */}
          <div className="col-lg-7">
            <div className="weather-hero-content">
              <span className="weather-tag">Live Weather Insights</span>

              <h1>
                Plan Your Journey <br />
                With Confidence
              </h1>

              <p>
                Get real-time forecasts, travel recommendations, and
                weather-based experiences for your destination.
              </p>

              {/* SEARCH */}
              <div className="weather-search-box">
                <input
                  type="text"
                  placeholder="Search destination..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <button onClick={handleSearch}>Search</button>
              </div>

              {/* QUICK CHIPS */}
              <div className="weather-chips">
                {["Bhopal", "Indore", "Goa", "Jaipur", "Pachmarhi"].map(
                  (item) => (
                    <span
                      key={item}
                      onClick={() => onSearch(item)}
                      style={{ cursor: "pointer" }}
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="col-lg-5 d-flex justify-content-center">
            <div className="weather-preview-card">
              <div className="weather-temp">
                {temp ? `${Math.round(temp)}°` : "--"}
              </div>

              <h3>{cityName || "Search City"}</h3>

              <p>{condition || "Weather"}</p>

              <div className="weather-info-grid">
                <div>
                  <span>Humidity</span>
                  <h5>{humidity ? `${humidity}%` : "--"}</h5>
                </div>

                <div>
                  <span>Wind</span>
                  <h5>{wind ? `${wind} m/s` : "--"}</h5>
                </div>

                <div>
                  <span>Feels Like</span>
                  <h5>{feelsLike ? `${Math.round(feelsLike)}°` : "--"}</h5>
                </div>

                <div>
                  <span>UV Index</span>
                  <h5>--</h5>
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
