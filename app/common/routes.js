import React from "react";
import {Route, Redirect} from "react-router-dom";

const mergedProps = (...props) => Object.assign({}, ...props);

export const DefaultRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={(props) => <Component {...mergedProps(rest, props)} />}
  />
);

export const PublicRoute = ({component: Component, user, ...rest}) => (
  <Route
    {...rest}
    render={(props) => user.signedIn === false
      ? <Component {...mergedProps(rest, props)} />
      : <Redirect to={{pathname: '/', state: {from: props.location}}}/>}
  />
);

export const PrivateRoute = ({component: Component, user, ...rest}) => (
  <Route
    {...rest}
    render={(props) => user.signedIn === true
      ? <Component {...mergedProps(rest, user, props)} />
      : <Redirect to={{pathname: '/', state: {from: props.location}}}/>}
  />
);
