import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// When the app comp renders and the "get data" button is clicked
// the api call is made and the missions list is rendered when the api
// promise is resolved
