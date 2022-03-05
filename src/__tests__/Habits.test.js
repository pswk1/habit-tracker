/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Habits from '../components/Habits/Habits';

const noHabits = [];
const setHabits = jest.fn();
const habits = [
    {   
        id: 0,
        goalPeriod: 'Daily',
        frequency: 1,
        timeOfDay: 'Afternoon',
        motivation: 'Do yoga',
        complete: false
    },
    {
        id: 1,
        goalPeriod: 'Daily',
        frequency: 2,
        timeOfDay: 'Morning',
        motivation: 'Take a walk',
        complete: false
    },
]

test('renders non-habit-related components', async () => {
	const view = render(
		<MemoryRouter>
			<Habits habits={noHabits} setHabits={setHabits} />
		</MemoryRouter>
	);

	const calendar = await view.findByTestId('calendar');
	expect(calendar).toBeInTheDocument();

    const actionContainer = await view.findByTestId('action-container');
	expect(actionContainer).toBeInTheDocument();

    const homeButton = await view.findByTestId('home-button');
	expect(homeButton).toBeInTheDocument();

    const addButton = await view.findByTestId('add-button');
	expect(addButton).toBeInTheDocument();

    const barChartButton = await view.findByTestId('bar-chart-button');
	expect(barChartButton).toBeInTheDocument();
});

describe('renders correct components', () => {
    test('renders correct components when no habits are set', async () => {
        const view = render(
            <MemoryRouter>
                <Habits habits={noHabits} setHabits={setHabits} />
            </MemoryRouter>
        );

        const noHabitsSet = await view.findByTestId('no-habits');
        expect(noHabitsSet).toBeInTheDocument();
        expect(noHabitsSet).toHaveTextContent('You have not set any habits yet.')
    })

    test('renders correct components when habits are set', async () => {
        const view = render(
            <MemoryRouter>
                <Habits habits={habits} setHabits={setHabits} />
            </MemoryRouter>
        );

        const habitsList = await view.findByTestId('habits-list');
        expect(habitsList).toBeInTheDocument();

        expect(view.getByText(/do yoga/i)).toBeInTheDocument();
        expect(view.getByText(/take a walk/i)).toBeInTheDocument();
    })
});
