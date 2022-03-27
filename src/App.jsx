import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";

// Imported Components
import Header from "./components/Header";

// Styled Components
const AppContainer = styled.div`
  width: 100%;
`;

const Main = styled.main`
  width: 100%;
`;

// Appliction Component
function App() {
  // localStorage.setItem("Class", "Front-end Developer");

  // const className = localStorage.getItem("Class");
  
  return (
    <div>
    <BrowserRouter>
      <GlobalStyles/>
      <AppContainer>
        
        <h1>Outside Main</h1>
        <Main>
          <h1>Main</h1>
          <Routes>
            {/* <Route exact path="/local" element={<Test />}/> */}
          </Routes>
        </Main>
      </AppContainer>
    </BrowserRouter>
    </div>
  );
}

export default App;