import React from "react";

function ForecastDetails({ forecast }) {
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{forecast.date}</div>
      <div className="forecast-details__max-temp">
        Max Temperature: {forecast.temperature.max}&deg;C
      </div>
      <div className="forecast-details__min-temp">
        Min Temperature: {forecast.temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">
        Humidity: {forecast.humidity}%
      </div>
      <div className="forecast-details__wind">
        Wind Speed: {forecast.wind.speed} {forecast.wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
