import React from "react";
import WeatherHero from "./WeatherHero";
import WeatherForecast from "./WeatherForecast";
import WeeklyForecast from "./WeeklyForecast";

function WeatherPage() {
  return (
    <div>
      <WeatherHero />
      <WeatherForecast/>
      <WeeklyForecast/>
    </div>
  );
}

export default WeatherPage;