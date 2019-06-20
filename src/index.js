import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";

import App from "./components/app";
import PhotoGrid from "./components/photogrid";
import Single from "./components/single";

import { Provider } from "react-redux";
import { PropsRoute } from "./components/router";
import store from "./store";

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <PropsRoute exact path="/" component={PhotoGrid} />
        <PropsRoute path="/view/:postId" component={Single} />
      </App>
    </BrowserRouter>
  </Provider>
);

render(router, document.getElementById("app"));
