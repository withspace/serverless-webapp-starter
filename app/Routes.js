import React from "react";
import {Route} from "react-router-dom";
import {Home} from "./home/Home";
import {Profile} from "./profile/Profile";

const Routes = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/profile" component={Profile}/>
  </div>
);

export default Routes;