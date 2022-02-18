import styled from 'styled-components';
import homeIcon from '../../icons/home.svg';
import addButtonIcon from '../../icons/add-button.svg';
import barChartIcon from '../../icons/bar-chart.svg';
import incrementIcon from '../../icons/+.svg';

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
	padding: 0.2rem 0;
	&:last-child {
		border: 1px solid #ef476f;
	}
`;
export const DateText = styled.span`
	font-family: Poppins;
	font-size: ${({ type }) => (type === 'day' ? '0.5625rem' : '0.875rem')};
	line-height: ${({ type }) => (type === 'day' ? '0.8125rem' : '1.3125rem')};
	font-weight: ${({ type }) => type === 'dateNum' && 'bold'};
	text-align: center;
	color: black;
`;

export const NoHabitSet = styled.div`
	width: 20.9rem;
	height: 6.9375rem;
	margin: 13.25rem auto 17.1875rem;
	text-align: center;
`;

export const HabitsList = styled.div`
	width: 100%;
	height: 40.5rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 0.5rem;
`;
export const Habit = styled.div`
	width: 80%;
	height: 3.75rem;
	background: ${({ complete }) => (complete ? '#06D6A0' : '#dddddd')};
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding 0 1rem;
	margin-top: 0.5rem;
`;

export const HabitText = styled.div`
	font-family: Poppins;
	font-size: 14px;
	line-height: 21px;
	${({ bold }) => bold && `font-weight: bold;`}
`;

export const HabitTextBox = styled.div`
	display: flex;
	flex-direction: column;
	width: -moz-fit-content;
	width: fit-content;
	height: 3rem;
`;

export const ActionContainer = styled.div`
	width: 100%;
	height: 4.75rem;
	display: grid;
	grid-template-columns: 50px 70px 40px;
	align-items: center;
	justify-content: space-evenly;
	grid-gap: 45px;
	padding: 0 1.125rem 1.125rem;
	position: relative;
	border-bottom: 5px solid #ef476f;
	&:after {
		content: '';
		display: block;
		position: absolute;
		width: 53%;
		bottom: -5px;
		right: 0px;
		border: 6px solid white;
	}
`;

export const IncrementBtn = styled.img.attrs({
	src: incrementIcon,
	alt: 'increment',
})`
	pointer: cursor;
	height: 1rem;
	width: 1rem;
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
