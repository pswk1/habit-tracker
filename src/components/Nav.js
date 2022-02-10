import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import settingsIcon from '../icons/settings.svg';
import slidersIcon from '../icons/sliders.svg';

const NavEl = styled.div`
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	height: 99px;
	width: 100%;
	display: grid;
	grid-template-columns: ${(props) => props.columns};
	grid-gap: 100px;
	justify-content: center;
	padding-top: 61px;
`;
const Title = styled.div`
	font-size: 16px;
	font-weight: 700;
`;

const SettingsIcon = styled.img.attrs({
	src: settingsIcon,
	alt: 'settings',
})`
	width: 22px;
	height: 22px;
`;

const SlidersIcon = styled.img.attrs({
	src: slidersIcon,
	alt: 'sliders',
})`
	width: 24px;
	height: 24px;
`;

const Nav = () => {
	let location = useLocation();

	if (location.pathname === '/set-habit') {
		return (
			<NavEl columns='22px 98px 24px'>
				<Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
					Back
				</Link>
				<Title>Yoga Habit</Title>
			</NavEl>
		);
	}
	return (
		<NavEl columns='22px 98px 24px'>
			<Link to={'/'}>
				<SettingsIcon />
			</Link>
			<Title>Habit Tracker</Title>
			<Link to={'/'}>
				<SlidersIcon />
			</Link>
		</NavEl>
	);
};

export default Nav;
