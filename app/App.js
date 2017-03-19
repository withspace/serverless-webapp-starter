import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import Header from "./header/Header";
import {MuiThemeProvider} from "material-ui";


const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Header/>
        <Routes/>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
