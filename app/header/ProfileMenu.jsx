import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../profile/Auth';
import User from '../profile/User';
import { headerStyles } from './Header';

export default function ProfileMenu({ auth, user }) {
  const handleSignOut = () => {
    auth.signOut({ email: user.email });
  };

  return (
    <div>
      <Link style={headerStyles.link} to="/profile/home">Profile</Link>
      <a href="#" role="button" style={headerStyles.link} onClick={handleSignOut}>Sign Out</a>
      {/*
       Currently we handle this feature with Links, like in case of Register/Sign In. There seems
       to be a bug with icon menu (and menu in the current version of React Toolbox and
       dependencies. Icon menu is open all time and it does not react on any actions. Possible
       relation with https://github.com/react-toolbox/react-toolbox/issues/1453
       <IconMenu icon="more_vert" position="topRight" menuRipple>
       <MenuItem value="profile" caption="Profile" onClick={openProfile} />
       <MenuItem value="signOut" caption="Sign out" onClick={signOut} />
       </IconMenu>
       */}
    </div>
  );
}

ProfileMenu.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};
