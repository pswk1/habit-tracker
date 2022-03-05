/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SetHabit from '../components/SetHabit/SetHabit';

const setHabits = jest.fn();
const habits = [
	{
		id: 0,
		goalPeriod: 'Daily',
		frequency: 1,
		timeOfDay: 'Afternoon',
		motivation: 'Do yoga',
		complete: false,
	},
	{
		id: 1,
		goalPeriod: 'Daily',
		frequency: 2,
		timeOfDay: 'Morning',
		motivation: 'Take a walk',
		complete: false,
	},
];

describe('components render correctly', () => {
	test('options render correctly', async () => {
		const view = render(
			<MemoryRouter>
				<SetHabit habits={habits} setHabits={setHabits} />
			</MemoryRouter>
		);
		const options = [
			'Daily',
			'Weekly',
			'Monthly',
			'Anytime',
			'Morning',
			'Afternoon',
			'Evening',
		];

		options.forEach((type) => {
			const option = view.getByText(type, 'i');
			expect(option).toBeInTheDocument();
		});
	});

	test('text/headers render correctly', () => {
		const view = render(
			<MemoryRouter>
				<SetHabit habits={habits} setHabits={setHabits} />
			</MemoryRouter>
		);

		const texts = [
			'Goal Period',
			'How many times per day?',
			'Time Of Day',
			'Start Date',
			'End Date',
			'Reminders',
			'Write something to motivate yourself:',
		];

		texts.forEach((text) => {
			expect(view.getByText(text, 'i')).toBeInTheDocument();
		});
	});
});

describe('test interaction and functionality', () => {
	test('state changes when user interacts', async () => {

        const handleClick = jest.spyOn(React, 'useState');
		handleClick.mockImplementation((habits) => [habits, setHabits]);

		const view = render(
			<MemoryRouter>
				<SetHabit habits={habits} setHabits={setHabits} />
			</MemoryRouter>
		);

        const daily = await view.findByTestId('daily');
        fireEvent.click(daily);

        const increment = await view.findByTestId('increment');
        fireEvent.click(increment);

        const submit = await view.findByTestId('submit');
        fireEvent.click(submit);

        expect(setHabits).toBeCalled();
	});
});
