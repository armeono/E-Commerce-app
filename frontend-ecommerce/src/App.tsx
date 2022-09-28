import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import ItemPage from "./pages/item-page/ItemPage";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { setID } from "./slices/IDSlice";
import { queryClient } from "./queryClient";
import Checkout from "./pages/checkout/Checkout";

function App() {

  const arrayOfNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const dispatch = useDispatch();

  const userID = useSelector((state: any) => state.id.uniqueID);
  
  console.log(userID)
  useEffect(() => {
    if (!userID) {
      let uniqueId: any = uuid();

      let newUniqueId: any = [];

      uniqueId.split("").map((char: any) => {
        arrayOfNum.map((num: any) => {
          if (char === String(num)) {
            newUniqueId.push(char);
          }
        });
      });

      newUniqueId = newUniqueId.join("").slice(0, 6);

      dispatch(setID(newUniqueId));


    
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/item" element={<ItemPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
