import React, { PropTypes } from 'react';
import { User } from '../../services/auth';

export default function Profile({ user }) {
  return (
    <div>
      <h1>Profile</h1>
      You are signed in as <strong>{user.email}</strong>.
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
};
