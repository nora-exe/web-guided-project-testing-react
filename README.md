# Space X Guided Project
🎥 https://youtu.be/k3sRsLjZH44

## Setup
Steps to be ready for the GP today:
1. clone the repo to your machine (no need to fork, unless you want to)
1. cd to project
1. run npm install (all dependencies we need to start are there, so no need to add new dependencies)
1. run npm start to fire up project in the browser
1. Open the project in your editor

## Key Terminology
* 📝 mock functions - [Function placeholders use to monitor function execution within a test.](https://jestjs.io/docs/en/mock-functions.html)
* 📝 mock spys - [Function placeholders that mock the execution of external libraries](https://silvenon.com/blog/mocking-with-jest/functions)
* 📝 rerender - [A react testing library module use to render a component more then once in a test.](https://testing-library.com/docs/react-testing-library/api/#rerender)
* 📝 async / await - [A javascript syntax that allows simpler, cleaner async code.](https://javascript.info/async-await)
* 📝 wait / waitFor - [React testing library modules that allow a component test to wait until an async call or state chance occurs.](https://testing-library.com/docs/dom-testing-library/api-async/)

💡 Key Concepts
* 📝 [unit testing](https://www.guru99.com/unit-testing-guide.html)
* 📝 [integration testing](https://www.guru99.com/unit-testing-guide.html)

💡 Reference Materials
* 📝 [React Testing Library query cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet/)
* 📝 [Jest expect functions](https://jestjs.io/docs/en/expect.html)
* 📝 [Jest Mock functions reference](https://www.w3resource.com/jest/mock-functions-api-reference.php)

## Notes
- Testing React Components
- Client-Side Authentication
- HTTP / AJAX II
- Web deployment

React app connected to backend that can: Create Read Update Delete (CRUD) data

Testing react components
- as the props change
- using Mocks
- testing Async API calls

TODAY
Write tests for Passing in
-different values as props to a component
-mock function as props to a component

Test
- a fake api call w mocks
- testing transitions w rerendering

💡 AAA
* __Arrange__ - setup component I'm testing
* __Act__ - execute behavior & extract what I'm testing
* __Assert__ - check if got expected response

⚡ Questions to ask yourself when devlping component unit tests:
> * Does the component render by default without errors?
> * How does the component change depending on the props passed in?
> * Does the component respond to user input?
> * Does the component respond to state change (async calls / redux)?
> * Does the component have error states?

__Be specific about your test cases.__
When X happens then component does Y.

Mocks - allow fake function/props
- Use to pass into props of a component.
- Can create our own fake output.
- Can monitor its use through the mock property.
const mockGetData = jest.fn();

Fake a library call
- When a component loads a library, loads our function instead.
- Can also create our own fake output
imoprt { fetchMissions as mockFetchMissions } from "./api/fetchMissions";
jest.mock("./api/fetchMissions");


### Steps
MissionForm.test.js in ./components
* 5 imports
* test() render(</>)
* abstract container.rerender 
* set isFetchingData to true
* expect statement + select message with screen.getByText
* getBy if expected, queryBy if NOT expected

Mocks:
* create mock function w jest
* PASS MOCK F IN AS PROP
* expect mock to be called

MissionsList.test.js in ./components

App.test.js in src



## Links
🎥 https://www.loom.com/share/d77ba3d65dc9456392a808c34bc323db