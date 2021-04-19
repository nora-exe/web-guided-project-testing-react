import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import MissionForm from "./MissionForm";

// Mission form renders with no errors, when it first mounts
test("renders without errors", () => {
  render(<MissionForm />);
});

// When the component receives true for "isFetchingData" prop,
// then the loading message appears in place of the button.
test("renders loading message when isFetchingData changes to true", () => {
  // arrange - render the component with the starting props
  const container = render(<MissionForm isFetchingData={false} />);
  console.log(container);

  // act - rerender the component with new props
  // rerender();

  // assert - check that the loading message is rendered
});
