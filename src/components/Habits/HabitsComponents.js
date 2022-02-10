import styled from 'styled-components';
import homeIcon from '../../icons/home.svg';
import addButtonIcon from '../../icons/add-button.svg';
import barChartIcon from '../../icons/bar-chart.svg';

export const Calendar = styled.div`
	margin: 2rem 1rem;
	display: flex;
	justify-content: space-between;
	height: 2.5rem;
`;

export const DateCircle = styled.div`
	width: 2.4375rem;
	height: 2.4375rem;
	border: 1px solid rgba(0, 0, 0, 0.12);
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;
`;
export const DateText = styled.span`
	font-family: Poppins;
	font-size: ${(props) => (props.type === 'day' ? '0.5625rem' : '0.875rem')};
	line-height: ${(props) => (props.type === 'day' ? '0.8125rem' : '1.3125rem')};
	font-weight: ${(props) => props.type === 'dateNum' && 'bold'};
	text-align: center;
	color: black;
`;

export const NoHabitSet = styled.div`
	width: 20.9rem;
	height: 6.9375rem;
	margin: 13.25rem auto 17.1875rem;
	text-align: center;
`;

export const ActionContainer = styled.div`
	width: 100%;
	height: 4.75rem;
	display: grid;
	grid-template-columns: 50px 70px 40px;
	align-items: center;
	justify-content: center;
	grid-gap: 45px;
	padding-bottom: 1.125rem;
	position: relative;
	border-bottom: 5px solid #ef476f;
	&:after {
		content: '';
		display: block;
		position: absolute;
		width: 200px;
		bottom: -5px;
		right: 0px;
		border: 6px solid white;
	}
`;

export const HomeButton = styled.img.attrs({
	src: homeIcon,
	alt: 'home',
})``;

export const AddButton = styled.img.attrs({
	src: addButtonIcon,
	alt: 'add',
})``;

export const BarChartButton = styled.img.attrs({
	src: barChartIcon,
	alt: 'bar chart',
})``;
