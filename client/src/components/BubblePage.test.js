import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  render(<BubblePage />);
  let firstColor = screen.findByText(/aliceblue/i);
  expect(firstColor).toBeTruthy()
});
