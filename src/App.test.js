import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { fetchMissions as mockFetchMissions } from './api/fetchMissions';

import App from "./App";

// mock f that makes api req
// 1 - build mock function (outside test) (import funct)
jest.mock("./api/fetchMissions");

// WHEN app component renders and Get Data button is clicked
// THEN api call is made and missions list is rendered when api promise is resolved
test("missions data is rendered after API call is resolved", async () => {
    // 2 - make mock f return a promise, then return data
    mockFetchMissions.mockResolvedValueOnce(testData); // () => new Promise(); resolve(testData)
    render(<App />);

    // click on button
    userEvent.click(screen.getByRole('button', { name: /get data/i });)

    // async call is initiated - await process to finish,
    // then make assertion
    await waitFor(() => screen.queryAllByTestId(/mission/i));

    expect(screen.queryAllByTestId(/mission/i)).toHaveLength(3);
});