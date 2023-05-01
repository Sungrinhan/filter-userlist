import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { initialize } from "../external/initialize";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "./store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

initialize().then(() =>
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      {/* <QueryClientProvider client={queryClient}> */}
      <Provider store={store}>
        <App />
        {/* </QueryClientProvider> */}
      </Provider>
    </React.StrictMode>
  )
);
