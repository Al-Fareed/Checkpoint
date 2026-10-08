import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { memoryStore } from "./store/memory.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={memoryStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
