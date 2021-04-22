import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MissionsList from './MissionsList';

// some test data to play with
// another method - browser -> network -> response JSON -> copy/paste
const testData = [
    { mission_id: '123', mission_name: "thaicom" },
    { mission_id: '1234', mission_name: "telstar" },
    { mission_id: '1235', mission_name: "iridium next" },
];


// when component receives missions data
//then it displays data in DOM
test('displays missions data when passed in as a prop', () => {
    const { rerender } = render(<MissionsList missions={[]} />);
    
    rerender(<MissionsList missions={testData} />);
    expect(screen.getAllByTestId(/mission/i)).toHaveLength(3);
})