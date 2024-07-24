/* eslint-disable react/no-deprecated */
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { AvatarProvider } from "./components/Profile/AvatarContext";
import { CartProvider } from './components/E-Pharmacy/Cart/CartContext';


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AvatarProvider>
      <CartProvider>
        <App />
      </CartProvider>
      </AvatarProvider>
  </React.StrictMode>
);
