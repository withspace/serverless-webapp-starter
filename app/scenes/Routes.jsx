import React from 'react';
import PropTypes from 'prop-types';
import HomeRoutes from './home/index';
import { Auth, User } from '../services/auth';
import ProfileRoutes from './profile';
import TasksRoutes from './tasks';

function Routes({ user, auth }) {
  return (
    <div>
      <HomeRoutes />
      <ProfileRoutes user={user} auth={auth} />
      <TasksRoutes />
    </div>
  );
}

Routes.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};

export default Routes;
