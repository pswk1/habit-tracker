import styled from 'styled-components';

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
