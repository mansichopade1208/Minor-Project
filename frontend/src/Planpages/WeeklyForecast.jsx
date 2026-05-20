import React, { useMemo } from "react";
import "./WeeklyForecast.css";

function WeeklyForecast({ weatherData }) {
  const forecastList = weatherData?.forecast?.list || [];

  // Group forecast by day
  const weeklyData = useMemo(() => {
    const daysMap = {};

    forecastList.forEach((item) => {
      const date = new Date(item.dt_txt);
      const day = date.toLocaleDateString("en-US", { weekday: "short" });

      if (!daysMap[day]) {
        daysMap[day] = {
          temps: [],
          icons: [],
        };
      }

      daysMap[day].temps.push(item.main.temp);
      daysMap[day].icons.push(item.weather?.[0]?.main);
    });

    return Object.keys(daysMap)
      .slice(0, 7)
      .map((day) => {
        const temps = daysMap[day].temps;

        const high = Math.round(Math.max(...temps));
        const low = Math.round(Math.min(...temps));

        // simple icon logic (most frequent condition)
        const iconSource = daysMap[day].icons;
        const mainCondition = iconSource.sort(
          (a, b) =>
            iconSource.filter((v) => v === b).length -
            iconSource.filter((v) => v === a).length,
        )[0];

        const getIcon = (cond) => {
          switch (cond) {
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

        return {
          day,
          high: `${high}°`,
          low: `${low}°`,
          icon: getIcon(mainCondition),
        };
      });
  }, [forecastList]);

  const current = weatherData?.current;

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

        {/* BEST TIME SECTION (still static - OK for now) */}
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
                  Based on current weather trends, mornings and evenings are
                  most suitable for outdoor exploration.
                </p>

                <div className="travel-info-grid">
                  <div>
                    <h5>Humidity</h5>
                    <p>{current?.main?.humidity ?? "--"}%</p>
                  </div>

                  <div>
                    <h5>Wind</h5>
                    <p>{current?.wind?.speed ?? "--"} m/s</p>
                  </div>

                  <div>
                    <h5>Condition</h5>
                    <p>{current?.weather?.[0]?.main ?? "--"}</p>
                  </div>

                  <div>
                    <h5>Feels Like</h5>
                    <p>
                      {current?.main?.feels_like
                        ? `${Math.round(current.main.feels_like)}°`
                        : "--"}
                    </p>
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
