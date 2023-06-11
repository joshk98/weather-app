import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import forecast from "../data/forecast.json";

test("renders learn react link", () => {
  render(<App location={forecast.location} forecasts={forecast.forecasts} />);
  const h1element = screen.getByText(/Manchester, UK/i);
  expect(h1element).toBeInTheDocument();
});
