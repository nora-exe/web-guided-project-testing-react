import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MissionForm from "./MissionForm";

// const { queryByRole, queryByText, getByRole, getByText } = screen;

// Mission form renders with no errors, when it first mounts
test("renders without errors", () => {
  render(<MissionForm />);
});

// When the component receives true for "isFetchingData" prop,
// then the loading message appears in place of the button.
test("renders loading message when isFetchingData changes to true", () => {
  // arrange - render the component with the starting props
  const { rerender } = render(<MissionForm isFetchingData={false} />);

  // assert - the Get Data button is rendered before the props change
  expect(screen.queryByText(/we are fetching data/i)).toBeNull();
  expect(screen.getByRole("button", { name: /get data/i })).toBeInTheDocument();

  // act - rerender the component with new props
  rerender(<MissionForm isFetchingData={true} />);

  // assert - check that the loading message is rendered
  expect(screen.getByText(/we are fetching data/i)).toBeInTheDocument();
  expect(screen.queryByRole("button")).toBeNull();
});

// MOCK FUNCTIONS
// build a mock function, pass the mock function in as a prop
// assert some things from/about the mock function

// When the user clicks the button
// then the function passed in from props is called
test("the function prop is called when Get Data is clicked", () => {
  // arrange - create the mock function
  const mockGetData = jest.fn(); // () => {}

  // arrange - render the component, pass the mock function in as a prop
  render(<MissionForm getData={mockGetData} />);

  // act - click the Get Data button
  const button = screen.getByRole("button", { name: /get data/i });
  userEvent.click(button);

  // assert
  expect(mockGetData).toHaveBeenCalled();
  expect(mockGetData).toHaveBeenCalledTimes(1);
  expect(mockGetData).toHaveBeenCalledWith("hellos");
  // expect(mockGetData).toHaveBeenCalled();
});
