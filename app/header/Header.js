import React from "react";
import {Link} from "react-router-dom";
import {Navigation} from "react-toolbox/lib/navigation";
import {AppBar} from "react-toolbox/lib/app_bar";
import ProfileMenu from "./ProfileMenu";

const styles = {
  title: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    textTransform: 'uppercase',
    marginLeft: '24px'
  }
};

const SignInButtons = ({auth}) => (
  <div>
    <Link style={styles.title} to="/profile/register">Register</Link>
    <Link style={styles.title} to="/profile/sign-in">Sign In</Link>
  </div>
);

const Header = ({auth, user}) => (
  <AppBar title="Serverless WebApp Starter" leftIcon="menu">
    <Navigation type="horizontal">
      {user.signedIn ? <ProfileMenu auth={auth} user={user}/> : <SignInButtons auth={auth}/>}
    </Navigation>
  </AppBar>
);

export default Header;
