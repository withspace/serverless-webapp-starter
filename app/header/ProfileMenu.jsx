import React, { PropTypes } from 'react';
import { IconMenu, MenuItem } from 'react-toolbox/lib/menu';
import Auth from '../profile/Auth';
import User from '../profile/User';

export default function ProfileMenu({ auth, user }) {
  const openProfile = () => {
    this.context.router.history.push('/profile/home');
  };

  const signOut = () => {
    auth.signOut({ email: user.email });
  };

  return (
    <IconMenu icon="more_vert" position="topRight" menuRipple>
      <MenuItem value="profile" caption="Profile" onClick={openProfile} />
      <MenuItem value="signOut" caption="Sign out" onClick={signOut} />
    </IconMenu>
  );
}

ProfileMenu.contextTypes = {
  router: React.PropTypes.object,
};

ProfileMenu.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};
