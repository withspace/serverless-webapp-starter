import React from "react";
import {Route, Redirect} from "react-router-dom";
import {Home} from "./home/Home";
import {Profile} from "./profile/Profile";

const PrivateRoute = ({component: Component, user, ...rest}) => (
  <Route
    {...rest}
    render={(props) => user.signedIn === true
      ? <Component {...props} />
      : <Redirect to={{pathname: '/', state: {from: props.location}}}/>}
  />
);

const Routes = (props) => (
  <div>
    <Route exact path="/" component={Home}/>
    <PrivateRoute path="/profile" component={Profile} user={props.user}/>
  </div>
);

export default Routes;