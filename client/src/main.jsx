import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
)
