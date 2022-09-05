import React from "react";
import Header from "./components/header/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
