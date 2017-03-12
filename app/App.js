import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

const App = () => (
  <MuiThemeProvider>
    <AppBar
      title="Serverless WebApp Starter"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </MuiThemeProvider>
);

export default App;
