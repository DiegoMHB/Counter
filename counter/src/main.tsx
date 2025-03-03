import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CounterProvider } from "./CounterProvider.tsx";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </ChakraProvider>
  </StrictMode>
);
