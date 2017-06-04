import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox/lib/navigation';
import { User } from '../../services/auth';
import ProfileMenu from './ProfileMenu';
import headerStyles from './headerStyles';

function SignInButtons() {
  return (
    <div>
      <Link style={headerStyles.link} to="/profile/register">Register</Link>
      <Link style={headerStyles.link} to="/profile/sign-in">Sign In</Link>
    </div>
  );
}

export default function Header({ user }) {
  return (
    <AppBar title="Serverless WebApp Starter" leftIcon="menu">
      <Navigation type="horizontal">
        {user.signedIn ? <ProfileMenu /> : <SignInButtons />}
      </Navigation>
    </AppBar>
  );
}

Header.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
};

