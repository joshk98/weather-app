import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 1525046400000,
        description: "Stub description 1",
        icon: "800",
        temperature: {
          max: 22,
          min: 12,
        },
      },
      {
        date: 1525132800000,
        description: "Stub description 2",
        icon: "600",
        temperature: {
          max: 24,
          min: 13,
        },
      },
    ],
    onForecastSelect: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps.forecasts} />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
