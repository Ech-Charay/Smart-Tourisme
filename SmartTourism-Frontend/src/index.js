import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Acceuil from "views/Acceuil.js";
import Events_Festivaux from "views/Event_Festivaux";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Switch>
            <Route path="/acceuil" render={(props) => <Acceuil {...props} />} />
            <Route path="/events_festivaux" render={() => <Events_Festivaux/>} />

            <Redirect to="/acceuil" />
            <Redirect from="/" to="/acceuil" />
          </Switch>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
