import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-toolbox/lib/button";
import {IconMenu, MenuItem} from "react-toolbox/lib/menu";
import {Navigation} from "react-toolbox/lib/navigation";
import {AppBar} from "react-toolbox/lib/app_bar";

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
    <Button>Register</Button>
    <Link style={styles.title} to="/profile/register">Register</Link>
    <Link style={styles.title} to="/profile/sign-in">Sign In</Link>
  </div>
);

const ProfileMenu = ({auth}) => (
  <IconMenu icon="more_vert" position="topRight" menuRipple>
    <MenuItem value="profile">
      <Link to="/profile/home" style={styles.title}>Profile</Link>
    </MenuItem>
    <MenuItem value="signOut" caption="Sign out" onClick={auth.handleSignOut}/>
  </IconMenu>
);

const Header = (props) => (
  <AppBar title="Serverless WebApp Starter" leftIcon="menu">
    <Navigation type="horizontal">
      {props.user.signedIn ? <ProfileMenu auth={props.auth}/> : <SignInButtons auth={props.auth}/>}
    </Navigation>
  </AppBar>
);

export default Header;
