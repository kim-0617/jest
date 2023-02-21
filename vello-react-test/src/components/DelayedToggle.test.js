import React from "react";
import DelayedToggle from "./DelayedToggle";
import { render, fireEvent, waitFor, findByText } from "@testing-library/react";

describe("<Delayed Toggle />", () => {
  //   it("reveals text when toggle is ON", async () => {
  //     const { getByText } = render(<DelayedToggle />);
  //     const toggleButton = getByText("토글");
  //     fireEvent.click(toggleButton);
  //     await waitFor(
  //       () => {
  //         expect(getByText("야호!!")).toBeInTheDocument();
  //       },
  //       { timeout: 1500 }
  //     );
  //   });
  //   it("toggles text ON/OFF", async () => {
  //     const { getByText } = render(<DelayedToggle />);
  //     const toggleButton = getByText("토글");
  //     fireEvent.click(toggleButton);
  //     const text = await waitFor(() => getByText("ON"), { timeout: 1500 });
  //     expect(text).toHaveTextContent("ON");
  //   });
  it("changes something when button is clicked", async () => {
    const { getByText, container } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    const mutations = await waitFor(() => {}, { container, timeout: 2000 });
    console.log("mutations : ", mutations);
  });
});
