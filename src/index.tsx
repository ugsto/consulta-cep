import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "@/components/Header";
import { Main } from "./components/Main";
import { Body } from "./components/Body";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Body>
        <Header />
        <Main></Main>
      </Body>
    </ThemeProvider>
  </StrictMode>
);
