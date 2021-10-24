import { Router } from "@reach/router";
import { observer } from "mobx-react";
import React from "react";

const Main = React.lazy(() => import(/* webpackChunkName: "Main" */ "../scenes/Main"));
const Login = React.lazy(() => import(/* webpackChunkName: "Login" */ "../scenes/Login"));
const SignUp = React.lazy(() => import(/* webpackChunkName: "SignUp" */ "../scenes/SignUp"));
const Plot = React.lazy(() => import(/* webpackChunkName: "Plot" */ "../scenes/Plot"));

const Routes = () => (
  <React.Suspense fallback={<div>asdf</div>}>
    <Router>
      <Main path='/' default />
      <Login path='/login' />
      <SignUp path='/signup' />
      <Plot path='/plot' />
    </Router>
  </React.Suspense>
);

export default observer(Routes);
