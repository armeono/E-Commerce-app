import React from "react";
import Header from "./components/header/Header";
import { ThemeProvider } from "styled-components";
import {theme} from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>

    </ThemeProvider>
  );
}

export default App;
