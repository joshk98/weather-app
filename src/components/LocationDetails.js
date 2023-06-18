import React from "react";

import "../styles/LocationDetails.css";

function LocationDetails({ city, country, errorMessage }) {
  return errorMessage ? (
    <h1 className="error-message">{errorMessage}</h1>
  ) : (
    <>
      <p>What&apos;s the weather like in...</p>
      <h1 className="location-details">{`${city}, ${country}`}</h1>
    </>
  );
}

LocationDetails.defaultProps = {
  errorMessage: "",
};

export default LocationDetails;
