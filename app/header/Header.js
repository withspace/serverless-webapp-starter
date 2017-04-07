import React from "react";
import {Link} from "react-router-dom";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

const styles = {
  title: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit'
  }
};

const getSignInButton = () => (
  <FlatButton
    label="Sign In"
    containerElement={<Link to="/profile/sign-in"/>}
  />
);

const getProfileMenu = (handleSignOut) => (
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem
      primaryText="Profile"
      containerElement={<Link to="/profile/home"/>}
    />
    <MenuItem
      primaryText="Sign out"
      onTouchTap={handleSignOut}
    />
  </IconMenu>
);

const Header = (props) => (
  <AppBar
    title={<Link to="/" style={styles.title}>Serverless WebApp Starter</Link>}
    onTitleTouchTap={this.goHome}
    iconElementRight={
      props.user.signedIn ? getProfileMenu(props.auth.handleSignOut) : getSignInButton()
    }
  />
);

export default Header;
