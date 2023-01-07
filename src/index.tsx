import React from "react";
import "./index.scss";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundery";

const root = document.getElementById("root") as HTMLElement;
if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
