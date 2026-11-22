import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import "@fontsource/almarai/400.css";
import "@fontsource/almarai/700.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Containerc from "./appmeteo/container.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback="Loading...">
          <Containerc />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);