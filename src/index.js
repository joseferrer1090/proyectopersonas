import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux"; // Esto me permite crear el Store y el middleware para
import { Provider } from "react-redux"; // Este es conector para que redux maneje el proyecto
import createHistory from "./../node_modules/history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk"; // Esta libreria me permite hacer peticiones asicronas
import reducers from "./reducers";

const history = createHistory(); //
const middleware = [routerMiddleware(history), thunk];

const store = createStore(reducers, applyMiddleware(...middleware)); // se crea la store con

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
