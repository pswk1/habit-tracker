import styled from 'styled-components';
import settingsIcon from '../../icons/settings.svg';
import slidersIcon from '../../icons/sliders.svg';

export const NavEl = styled.div`
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	height: 99px;
	width: 100%;
	display: grid;
	grid-template-columns: ${(props) => props.columns};
	grid-gap: 100px;
	justify-content: center;
	padding-top: 61px;
`;
export const Title = styled.div`
	font-size: 16px;
	font-weight: 700;
`;

export const SettingsIcon = styled.img.attrs({
	src: settingsIcon,
	alt: 'settings',
})`
	width: 22px;
	height: 22px;
`;

export const SlidersIcon = styled.img.attrs({
	src: slidersIcon,
	alt: 'sliders',
})`
	width: 24px;
	height: 24px;
`;