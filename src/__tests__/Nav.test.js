/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import Nav from '../components/Nav/Nav';
import { MemoryRouter } from 'react-router-dom';

describe('renders components of navbar component on homepage', () => {
	test('renders settings icon, title, and sliders icon', async () => {
		const view = render(
			<MemoryRouter>
				<Nav />
			</MemoryRouter>
		);

		const settingsIcon = await view.findByTestId('settings-icon');
		expect(settingsIcon).toBeInTheDocument();

        const title = await view.findByTestId('title');
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Habit Tracker');

        const slidersIcon = await view.findByTestId('sliders-icon');
        expect(slidersIcon).toBeInTheDocument();
	});
});

describe('renders components of navbar component on set habit', () => {
    test('renders back link and yoga title', async () => {
        const view = render(
			<MemoryRouter initialEntries={[{ pathname: '/set-habit'  }]}>
				<Nav />
			</MemoryRouter>
		);

        const goBack = await view.findByTestId('go-back');
        expect(goBack).toBeInTheDocument();
        expect(goBack).toHaveTextContent('Back');

        const setHabitTitle = await view.findByTestId('set-habit-title');
        expect(setHabitTitle).toBeInTheDocument();
        expect(setHabitTitle).toHaveTextContent('Yoga Habit');
    })
})
