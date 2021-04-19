import React from "react";
import {
  findAllByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchMissions as mockFetchMissions } from "./api/fetchMissions";

import App from "./App";

// mock the function that makes the API request
// 1 - build the mock function
jest.mock("./api/fetchMissions");

const testData = {
  data: [
    { mission_id: "123", mission_name: "Thaicom" },
    { mission_id: "1234", mission_name: "Telstar" },
    { mission_id: "1235", mission_name: "Iridium NEXT" },
  ],
};

// When the app comp renders and the "get data" button is clicked
// the api call is made and the missions list is rendered when the api
// promise is resolved
test("missions data is rendered after the API call is resolved", async () => {
  // 2. make the mock function return a promise, then return data
  mockFetchMissions.mockResolvedValueOnce(testData); // () => new Promise(); resolve(testData)
  const { debug } = render(<App />);

  // click on the button
  userEvent.click(screen.getByRole("button", { name: /get data/i }));

  // an async call is initiated - we "await" for that process to finish,
  // then make some assertion

  // await waitFor(() => screen.queryAllByTestId(/mission/i));
  // expect(screen.queryAllByTestId(/mission/i)).toHaveLength(3);

  expect(await screen.findAllByTestId(/mission/i)).toHaveLength(3);
});
