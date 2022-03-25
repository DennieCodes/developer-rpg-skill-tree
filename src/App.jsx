import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";

// Imported Components
import Header from "./components/Header";

// Styled Components
const AppContainer = styled.div`
`;

const Main = styled.main`
`;

// Appliction Component
function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyles/>
      <AppContainer>
        <Header />

        <Main>
          <Routes>
            {/* <Route exact path="/local" element={<Test />}/> */}
          </Routes>
        </Main>
      </AppContainer>
    </BrowserRouter>
    </>
  );
}

export default App;