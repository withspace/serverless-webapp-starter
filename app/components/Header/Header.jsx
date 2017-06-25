import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { IconMenu, MenuItem } from 'react-toolbox/lib/menu';
import { Navigation } from 'react-toolbox/lib/navigation';
import { User } from '../../services/auth';
import headerStyles from './headerStyles';
import styles from '../../app.css';

function SignInButtons() {
  return (
    <div>
      <div className={styles.desktopOnly}>
        <Link style={headerStyles.link} to="/profile/register">Register</Link>
        <Link style={headerStyles.link} to="/profile/sign-in">Sign In</Link>
      </div>
      <div className={styles.mobileOnly}>
        <IconMenu icon="more_vert" position="topRight" menuRipple>
          <MenuItem>
            <Link style={headerStyles.menuLink} to="/profile/register">Register</Link>
          </MenuItem>
          <MenuItem>
            <Link style={headerStyles.menuLink} to="/profile/sign-in">Sign in</Link>
          </MenuItem>
        </IconMenu>
      </div>
    </div>
  );
}

function ProfileMenu() {
  return (
    <div>
      <div className={styles.desktopOnly}>
        <Link style={headerStyles.link} to="/profile/home">Profile</Link>
        <Link style={headerStyles.link} to="/profile/sign-out">Sign out</Link>
      </div>
      <div className={styles.mobileOnly}>
        <IconMenu icon="account_circle" position="topRight" menuRipple>
          <MenuItem>
            <Link style={headerStyles.menuLink} to="/profile/home">Profile</Link>
          </MenuItem>
          <MenuItem>
            <Link style={headerStyles.menuLink} to="/profile/sign-out">Sign out</Link>
          </MenuItem>
        </IconMenu>
      </div>
    </div>
  );
}

export default function Header({ user }) {
  return (
    <AppBar title="Serverless WebApp Starter">
      <Navigation type="horizontal">
        {user.signedIn ? <ProfileMenu /> : <SignInButtons />}
      </Navigation>
    </AppBar>
  );
}

Header.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
};

