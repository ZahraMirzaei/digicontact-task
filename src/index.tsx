import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContactsProvider } from "./features/contacts/contactsContext";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContactsProvider>
      <App />
    </ContactsProvider>
  </React.StrictMode>
);
