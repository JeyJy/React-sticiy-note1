import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyles";
import { Routes } from "./routes";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
