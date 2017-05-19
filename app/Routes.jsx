import React, { PropTypes } from 'react';
import { DefaultRoute } from './common/routes';
import Home from './home/Home';
import Auth from './profile/Auth';
import ProfileRoutes from './profile/ProfileRoutes';
import User from './profile/User';

function Routes({ user, auth }) {
  return (
    <div>
      <DefaultRoute exact path="/" component={Home} />
      <ProfileRoutes user={user} auth={auth} />
    </div>
  );
}

Routes.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};

export default Routes;
