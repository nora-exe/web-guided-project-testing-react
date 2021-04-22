import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MissionForm from './MissionForm';

// Test: Mission form renders with no errors when it first mounts
test("renders without errors", () => {
    render(<MissionForm />);
});

// WHEN component receives true for isFetchingData prop, 
// THEN loading message appears in place of button
test("renders loading message when isFetchingData changes to true", () => {
    // arrange - set up component w starting props
    const {rerender} = render(<MissionForm isFetchingData={ false } />);
    // console.log(container);

    // assert - the Get Data button is rendered before the props change
    expect(screen.queryByText(/we are fetching data/i)).toBeNull();
    expect(screen.getByRole('button', { name: /get data/i })).toBeInTheDocument();


    // act - rerender component w new props
    rerender(<MissionForm isFetchingData={true} />)

    // assert - check that loading message is rendered
    expect(screen.getByText(/we are fetching data/i)).toBeInTheDocument();
});

// MOCK FUNCTIONS 
// build mock f, pass mock f in as a prop, assert some things from the mock f


// WHEN user clicks button
// THEN f passed in from props is called
test('the function prop is called when Get Data is clicked', () => {
    //arrange - create mock f w jest
    const mockGetData = jest.fn();
    // console.log(mockGetData);

    //arrange - render component, pass mock f in as prop
    render(<MissionForm getData={mockGetData} />);

    //act - click Get Data button
    const button = screen.getByRole('button', { name: /get data/i });
    userEvent.click(button);

    //assert
    expect(mockGetData).toHaveBeenCalled();
    
    //SANITY CHECK: this should fail because it only calls once (1) not twice (2)
    // expect(mockGetData).toHaveBeenCalledTimes(2);
});