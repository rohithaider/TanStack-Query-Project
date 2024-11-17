import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { IdProvider } from "../context/IDContext.jsx";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:5000,
    }
  }
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IdProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </IdProvider>
  </StrictMode>
);
