import React, { PropTypes } from 'react';
import { PrivateRoute, PublicRoute } from '../../components/routes';
import ConfirmRegistration from './ConfirmRegistration';
import { Auth, User } from '../../services/auth';
import Profile from './Profile';
import Register from './Register';
import SignIn from './SignIn';
import SignOut from './SignOut';

export default function ProfileRoutes({ user, auth }) {
  return (
    <div>
      <PublicRoute path="/profile/sign-in" component={SignIn} user={user} auth={auth} />
      <PublicRoute path="/profile/register" component={Register} user={user} auth={auth} />
      <PublicRoute path="/profile/confirm-registration" component={ConfirmRegistration} user={user} auth={auth} />
      <PrivateRoute path="/profile/home" component={Profile} user={user} />
      <PrivateRoute path="/profile/sign-out" component={SignOut} user={user} auth={auth} />
    </div>
  );
}

ProfileRoutes.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};

