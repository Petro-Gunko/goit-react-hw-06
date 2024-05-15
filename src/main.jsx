import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "../src/redux/store";
import { persistor } from "../src/redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
