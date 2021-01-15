import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch  } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
import 'leaflet/dist/leaflet.css';
import "assets/css/leaflet_container.css";

import App from "./App.js";

const store = ConfigureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <App />
          </Switch>
        </BrowserRouter>
      </Provider>,
  document.getElementById("root")
);
