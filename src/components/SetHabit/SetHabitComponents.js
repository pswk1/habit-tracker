import styled from 'styled-components';
import incrementIcon from '../../icons/+.svg';

export const SetHabitContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	padding: 2.1875rem;
`;

export const SelectEl = styled.div`
	height: 3.4375rem;
	width: 20.75rem;
    margin-bottom: 1rem;
`;

export const RowEl = styled.div`
	height: 2.25rem;
	width: 19.39rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1.7rem 0rem;
`;

export const Text = styled.div`
	font-family: SF Pro Display;
	font-size: 0.875rem;
	line-height: 1.0625rem;
	margin-bottom: 0.8rem;
	${({ bold }) => bold && `font-weight: bold;`}
`;

export const Option = styled.span`
	height: 1.6875rem;
	background: ${(props) => (props.selected ? '#118AB2' : '#DFDFDF')};
	border-radius: 20px;
	color: ${(props) => (props.selected ? '#FFFFFF' : '#4E4C49')};
	font-size: 12px;
	padding: 0.5rem 0.9rem;
	margin-right: 0.5rem;
	cursor: pointer;
`;

export const CounterBox = styled.div`
	height: 2.25rem;
	width: 3.6rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.7rem;
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
})`
	pointer: cursor;
`;

export const TextArea = styled.textarea`
	height: 5.625rem;
	width: 19.25rem;
	background: rgba(255, 255, 255, 0.6);
	border: 1px solid rgba(56, 56, 56, 0.6);
	box-sizing: border-box;
	border-radius: 10px;
	margin-bottom: 4rem;
	margin-top: -1rem;
`;

export const SubmitBtn = styled.button`
	height: 3.625rem;
	width: 18.25rem;
	background: #000000;
	border-radius: 10px;
	color: #FFFFFF;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.65px;
    font-weight: bold;
    pointer: cursor;
`;
