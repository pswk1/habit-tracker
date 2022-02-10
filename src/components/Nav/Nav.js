import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavEl, Title, SettingsIcon, SlidersIcon } from './NavComponents';

const Nav = () => {
	let location = useLocation();

	if (location.pathname === '/set-habit') {
		return (
			<NavEl columns='1.375rem 6.125rem 1.5rem'>
				<Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
					Back
				</Link>
				<Title>Yoga Habit</Title>
			</NavEl>
		);
	}
	return (
		<NavEl columns='1.375rem 6.125rem 1.5rem'>
			<Link to={'#'}>
				<SettingsIcon />
			</Link>
			<Title>Habit Tracker</Title>
			<Link to={'#'}>
				<SlidersIcon />
			</Link>
		</NavEl>
	);
};

export default Nav;
