import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import { Provider } from "react-redux";
// import { store, persistor } from "../src/redux/store.js";
// import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")).render(
  <Suspense>
    <BrowserRouter>
      <App />

      <Toaster />
    </BrowserRouter>
  </Suspense>
);

{
  /* <Provider store={store}>
<PersistGate loading={null} persistor={persistor}> */
}
