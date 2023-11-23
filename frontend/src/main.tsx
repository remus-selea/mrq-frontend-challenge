import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import connect from "./services/socket";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";

connect();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // {/*</React.StrictMode>*/}
);
