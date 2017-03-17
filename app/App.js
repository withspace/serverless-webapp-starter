import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import getRoutes from "./router";
import Header from "./header/Header";
import {MuiThemeProvider} from "material-ui";


const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Header/>
        {getRoutes()}
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
