import React, { PropTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { User } from '../services/auth';

const mergedProps = (...props) => Object.assign({}, ...props);

export function DefaultRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={props => <Component {...mergedProps(rest, props)} />} />;
}

DefaultRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export function PublicRoute({ component: Component, user, ...rest }) {
  function RedirectSigned(props) {
    return user.signedIn ? <Redirect to="/" /> : <Component {...mergedProps({ user }, rest, props)} />;
  }
  return <Route {...rest} render={RedirectSigned} />;
}

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};

export function PrivateRoute({ component: Component, user, ...rest }) {
  function RedirectUnsigned(props) {
    return user.signedIn ? <Component {...mergedProps({ user }, rest, props)} /> : <Redirect to="/" />;
  }
  return <Route {...rest} render={RedirectUnsigned} />;
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};
