import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const formattedDate = new Date(forecast.date).toDateString();
  return (
    <div className="forecast-details">
      <h2 className="forecast-details__date">{formattedDate}</h2>
      <div className="forecast-details__max-temp">
        <strong>Max Temperature:</strong> {forecast.temperature.max}&deg;C
      </div>
      <div className="forecast-details__min-temp">
        <strong>Min Temperature:</strong> {forecast.temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">
        <strong>Humidity:</strong> {forecast.humidity}%
      </div>
      <div className="forecast-details__wind">
        <strong>Wind Speed:</strong> {forecast.wind.speed} mph
      </div>
    </div>
  );
}

export default ForecastDetails;
