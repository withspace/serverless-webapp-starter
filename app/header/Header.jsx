import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox/lib/navigation';
import Auth from '../profile/Auth';
import User from '../profile/User';
import ProfileMenu from './ProfileMenu';

const styles = {
  title: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    textTransform: 'uppercase',
    marginLeft: '24px',
  },
};

function SignInButtons() {
  return (
    <div>
      <Link style={styles.title} to="/profile/register">Register</Link>
      <Link style={styles.title} to="/profile/sign-in">Sign In</Link>
    </div>
  );
}

export default function Header({ auth, user }) {
  return (
    <AppBar title="Serverless WebApp Starter" leftIcon="menu">
      <Navigation type="horizontal">
        {user.signedIn ? <ProfileMenu auth={auth} user={user} /> : <SignInButtons auth={auth} />}
      </Navigation>
    </AppBar>
  );
}

Header.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};

