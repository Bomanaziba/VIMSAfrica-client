import logo from './logo.svg';

//import './App.css';

import React from 'react';
//import ScriptTag from 'react-script-tag';
import { routes } from "./routes";
import { Router, RouteComponent, createBrowserHistory } from "react-resource-router";
import { useAuth } from './utils/store/authStore';
//import { getDash } from './utils/store/DashboardStore';
import utils from './utils/store/state';
import axiosConfig from './config/axios.config';
import "./utils/styles/css/style.css";
import "./utils/styles/css/style.css.map";

const history = createBrowserHistory();

function App() {

  const [auth, { initAuth }] = useAuth();
  //const [ dashboard, { initDashboard }] = getDash();

  window.onbeforeunload = () => {
    utils.saveState(auth, "auth");
    //utils.saveState(dashboard, "dashboard");
    sessionStorage.setItem("path", history.location.pathname);
    sessionStorage.setItem("token", auth.token);
  };

  window.onload = () => {
    initAuth(utils.loadState("auth"));
    //initDashboard(utils.loadState("dashboard"));
    sessionStorage.removeItem("token");
  };

  axiosConfig(auth.token);

  return (
    <Router history={history} routes={routes}>
{/* 
    <ScriptTag type="text/javascript" src="./utils/script/jquery-1.11.1.min.js" />
    <ScriptTag type="text/javascript" src="./utils/script/bootstrap.min.js" /> */}
      <RouteComponent />
    </Router>
  );
}

export default App;
