import { CircularProgress } from "@mui/material";
import { Router } from "@reach/router";
import { observer } from "mobx-react";
import React from "react";

const Main = React.lazy(() => import(/* webpackChunkName: "Main" */ "../scenes/Main"));
const Login = React.lazy(() => import(/* webpackChunkName: "Login" */ "../scenes/Login"));
const SignUp = React.lazy(() => import(/* webpackChunkName: "SignUp" */ "../scenes/SignUp"));
const Plot = React.lazy(() => import(/* webpackChunkName: "Plot" */ "../scenes/Plot"));

const Routes = () => (
  <React.Suspense fallback={
    <CircularProgress sx={{
      position: 'absolute',
      left: '50%',
      marginLeft: '-20px',
      transform: 'translateX(-50%)'
    }} />
  }>
    <Router>
      <Main path='/' default />
      <Login path='/login' />
      <SignUp path='/signup' />
      <Plot path='/plot' />
    </Router>
  </React.Suspense>
);

export default observer(Routes);
