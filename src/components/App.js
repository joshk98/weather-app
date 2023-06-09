import React from "react";
import LocationDetails from "./LocationDetails";
// import ForecastSummary from "./ForecastSummary";
import "../styles/App.css";

function App({ location }) {
  const { city, country } = location;
  // const { date, temperature, description, icon } = forecasts;
  return (
    <>
      <LocationDetails city={city} country={country} />
      {/* <ForecastSummary
        date={date}
        icon={icon}
        temperature={temperature}
        description={description}
      /> */}
    </>
  );
}

export default App;
