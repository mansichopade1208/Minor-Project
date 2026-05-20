import React from "react";
import "./WeatherForecast.css";

function WeatherForecast({ weatherData }) {
  // OpenWeatherMap 3-hour forecast list
  const hourlyList = weatherData?.forecast?.list || [];

  // Take next 6–8 intervals (≈ 18–24 hours view)
  const hourlyData = hourlyList.slice(0, 8);

  // Current weather highlights
  const current = weatherData?.current;

  const humidity = current?.main?.humidity;
  const wind = current?.wind?.speed;
  const sunrise = current?.sys?.sunrise;
  const sunset = current?.sys?.sunset;
  const city = current?.name;

  // convert unix time → readable
  const formatTime = (timestamp) => {
    if (!timestamp) return "--";
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // convert forecast time
  const formatHour = (dt_txt) => {
    return new Date(dt_txt).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // simple icon mapping
  const getIcon = (main) => {
    switch (main) {
      case "Clear":
        return "☀️";
      case "Clouds":
        return "🌤️";
      case "Rain":
        return "🌧️";
      case "Drizzle":
        return "🌦️";
      case "Thunderstorm":
        return "⛈️";
      default:
        return "🌡️";
    }
  };

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
                <p>Next 24 hours for {city || "your location"}</p>
              </div>

              <div className="hourly-scroll">
                {hourlyData.map((item, index) => (
                  <div className="hour-card" key={index}>
                    <span>{formatHour(item.dt_txt)}</span>

                    <div className="forecast-icon">
                      {getIcon(item.weather?.[0]?.main)}
                    </div>

                    <h4>{Math.round(item.main?.temp)}°</h4>
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
                  <h5>{formatTime(current?.sys?.sunrise)}</h5>
                </div>

                <div className="detail-box">
                  <span>Sunset</span>
                  <h5>{formatTime(current?.sys?.sunset)}</h5>
                </div>

                <div className="detail-box">
                  <span>Humidity</span>
                  <h5>{humidity ? `${humidity}%` : "--"}</h5>
                </div>

                <div className="detail-box">
                  <span>Wind</span>
                  <h5>{wind ? `${wind} m/s` : "--"}</h5>
                </div>

                <div className="detail-box">
                  <span>City</span>
                  <h5>{city || "--"}</h5>
                </div>

                <div className="detail-box">
                  <span>Condition</span>
                  <h5>{current?.weather?.[0]?.main || "--"}</h5>
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
