import React, { PropTypes } from 'react';
import { PrivateRoute, PublicRoute } from '../common/routes';
import ConfirmRegistration from './ConfirmRegistration';
import Auth from './Auth';
import Profile from './Profile';
import Register from './Register';
import SignIn from './SignIn';
import User from './User';

export default function ProfileRoutes({ user, auth }) {
  return (
    <div>
      <PublicRoute path="/profile/sign-in" component={SignIn} user={user} auth={auth} />
      <PublicRoute path="/profile/register" component={Register} user={user} auth={auth} />
      <PublicRoute path="/profile/confirm-registration" component={ConfirmRegistration} user={user} auth={auth} />
      <PrivateRoute path="/profile/home" component={Profile} user={user} />
    </div>
  );
}

ProfileRoutes.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};

