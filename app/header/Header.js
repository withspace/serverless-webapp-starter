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
    color: 'inherit'
  }
};

const getSignInButton = (handleSignIn) => (
  <Button label="Sign In" onClick={handleSignIn} flat primary/>
);

const getProfileMenu = (handleSignOut) => (
  <IconMenu icon="more_vert" position="topRight" menuRipple>
    <MenuItem value="profile">
      <Link to="/profile" style={styles.title}>Profile</Link>
    </MenuItem>
    <MenuItem value="signOut" caption="Sign out" onClick={handleSignOut}/>
  </IconMenu>
);


const Header = (props) => (
  <AppBar title="React Toolbox" leftIcon="menu">
    <Navigation type="horizontal">
      {props.user.signedIn ? getProfileMenu(props.auth.handleSignOut) : getSignInButton(props.auth.handleSignIn)}
    </Navigation>
  </AppBar>
);


export default Header;
