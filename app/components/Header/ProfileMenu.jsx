import React from 'react';
import { Link } from 'react-router-dom';
import headerStyles from './headerStyles';

export default function ProfileMenu() {
  return (
    <div>
      <Link style={headerStyles.link} to="/profile/home">Profile</Link>
      <Link style={headerStyles.link} to="/profile/sign-out">Sign out</Link>
    </div>
  );
}
