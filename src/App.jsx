import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import { CartProvider } from "./context/CartContext";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Header />
        <main>
          <HomePage />
        </main>
      </CartProvider>
    </ThemeProvider>
  );
}