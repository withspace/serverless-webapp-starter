import React from 'react';
import { Link } from 'react-router-dom';
import headerStyles from './headerStyles';

export default function ProfileMenu() {
  return (
    <div>
      <Link style={headerStyles.link} to="/profile/home">Profile</Link>
      <Link style={headerStyles.link} to="/profile/sign-out">Sign out</Link>
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
