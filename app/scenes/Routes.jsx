import React from 'react';
import PropTypes from 'prop-types';
import HomeRoutes from './home/index';
import { Auth, User } from '../services/auth';
import ProfileRoutes from './profile/ProfileRoutes';

function Routes({ user, auth }) {
  return (
    <div>
      <HomeRoutes />
      <ProfileRoutes user={user} auth={auth} />
    </div>
  );
}

Routes.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};

export default Routes;
