import React from "react";
import LocationDetails from "./LocationDetails";
import "../styles/App.css";

function App({ location }) {
  const { city, country } = location;
  return <LocationDetails city={city} country={country} />;
}

export default App;
