import styled from 'styled-components';
import settingsIcon from '../../icons/settings.svg';
import slidersIcon from '../../icons/sliders.svg';

export const NavEl = styled.div`
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	height: 99px;
	width: 100%;
	display: grid;
	grid-template-columns: ${(props) => props.columns};
	grid-gap: 5.9rem;
	align-items: center;
	justify-content: space-around;
	padding-top: 50px;
	padding-bottom: 12px;
`;
export const Title = styled.div`
	font-size: 1rem;
	font-weight: 700;
`;

export const SettingsIcon = styled.img.attrs({
	src: settingsIcon,
	alt: 'settings',
})`
	width: 1.375rem;
	height: 1.375rem;
`;

export const SlidersIcon = styled.img.attrs({
	src: slidersIcon,
	alt: 'sliders',
})`
	width: 1.5rem;
	height: 1.5rem;
`;