import React from 'react';
import styled from 'styled-components';

const NavEl = styled.div`
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	height: 99px;
	width: 100%;
	display: flex;
	align-items: center;
`;
const Title = styled.div`
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 19px;
	letter-spacing: 0px;
	text-align: center;
`;

const Nav = () => {
	return (
  <NavEl>
    <Title>
      Habit Tracker
    </Title>
  </NavEl>
  
  );
};

export default Nav;
