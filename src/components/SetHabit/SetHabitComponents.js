import styled from 'styled-components';
import incrementIcon from '../../icons/+.svg';

export const SetHabitContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	padding: 2.1875rem 0;
`;

export const GoalEl = styled.div`
	height: 3.4375rem;
	width: 17.75rem;
`;

export const PerDayEl = styled.div`
	height: 2.25rem;
	width: 18.39rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Text = styled.div`
	font-family: SF Pro Display;
	font-size: 0.875rem;
	line-height: 1.0625rem;
	margin-bottom: 0.5rem;
`;

export const Option = styled.span`
	height: 1.6875rem;
	background: ${(props) => (props.selected ? '#118AB2' : '#DFDFDF')};
	border-radius: 20px;
	color: ${(props) => (props.selected ? '#FFFFFF' : '#4E4C49')};
	font-size: 12px;
	padding: 0.5rem 0.9rem;
	margin-right: 1rem;
	cursor: pointer;
`;

export const CounterBox = styled.div`
	height: 2.25rem;
	width: 3.11375rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const Counter = styled.div`
	height: 2.25rem;
	width: 2rem;
	background: #dfdfdf;
	border-radius: 10px;
    color: black;
    display: flex;
    justify-content: center;
	align-items: center;
    margin: 0 2px;
`;

export const DecrementBtn = styled.div`
	height: 1px;
	width: 5.9px;
	background: black;
    border-radius: 10px;
    pointer: cursor;
`;

export const IncrementBtn = styled.img.attrs({
	src: incrementIcon,
	alt: 'increment',
})`pointer: cursor;`;
