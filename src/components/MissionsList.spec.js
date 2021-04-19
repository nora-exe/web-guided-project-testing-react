import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MissionsList from "./MissionsList";

// When the component receives missions data
// then it displays the data in the DOM
test("displays missions data when passed in as a prop", () => {
  render(<MissionsList />);
});
