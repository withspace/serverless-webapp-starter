import React, { PropTypes } from 'react';
import { Auth, User } from '../../services/auth';
import { Loader } from '../../components/messages';

export default function SignOut({ auth, user }) {
  auth.signOut({ email: user.email });
  return <Loader text={`Signing out ${user.email}...`} />;
}

SignOut.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};
