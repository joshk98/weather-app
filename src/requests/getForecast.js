import axios from "axios";

const getForecast = async (setSelectedDate, setForecasts, setLocation) => {
  const endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  const response = await axios.get(endpoint);
  setSelectedDate(response.data.forecasts[0].date);
  setForecasts(response.data.forecasts);
  setLocation(response.data.location);
};

export default getForecast;
