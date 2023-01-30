import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app";
import { CustomProvider } from "./style/theme/theme-provider";

if (import.meta.env.MODE === "development") {
  // eslint-disable-next-line unicorn/prefer-top-level-await
  (async () => {
    const { worker } = await import("./mocks/browser");
    worker.start();
  })();
}

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <CustomProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomProvider>
  </React.StrictMode>
);
