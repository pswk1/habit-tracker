import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavEl, Title, SettingsIcon, SlidersIcon } from './NavComponents';

const Nav = () => {
	let location = useLocation();

	if (location.pathname === '/set-habit') {
		return (
			<NavEl columns='1rem 6.125rem 1.5rem'>
				<Link data-testid='go-back' style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
					Back
				</Link>
				<Title data-testid='set-habit-title'>Yoga Habit</Title>
			</NavEl>
		);
	}
	return (
		<NavEl columns='1.375rem 6.125rem 1.5rem'>
			<Link data-testid='settings-icon' to={'#'}>
				<SettingsIcon />
			</Link>
			<Title data-testid='title'>Habit Tracker</Title>
			<Link data-testid='sliders-icon' to={'#'}>
				<SlidersIcon />
			</Link>
		</NavEl>
	);
};

export default Nav;
