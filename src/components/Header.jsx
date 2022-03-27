import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { Link } from 'react-router-dom';

import { ReactComponent } from "../images/swords-emblem.svg";

// Component Styling
const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 64px;
  height: 64px;
`;

// Header Component
const Header = () => {
  return( 
    <HeaderStyled>
      <Link to="/">
        <Logo src='{ReactComponent}'/>
      </Link>

      <h1>Header</h1>
      
    </HeaderStyled>
  )
}

export default Header;