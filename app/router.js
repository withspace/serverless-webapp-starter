import React from "react";
import {Route} from "react-router-dom";
import {Home} from "./home/Home";
import {Profile} from "./profile/Profile";

export default function getRoutes() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/profile" component={Profile}/>
    </div>
  );
}