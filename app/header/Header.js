import React, {Component} from "react";
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
    'text-decoration': 'none',
    color: 'inherit'
  }
};

const getSignInButton = (handleSignIn) => (
  <FlatButton
    label="Sign In"
    onTouchTap={handleSignIn}
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
      containerElement={<Link to="/profile"/>}
    />
    <MenuItem
      primaryText="Sign out"
      onTouchTap={handleSignOut}
    />
  </IconMenu>
);

class Header extends Component {

  state = {
    signedIn: false,
  };

  handleSignIn = () => {
    this.setState({signedIn: true})
  };

  handleSignOut = () => {
    this.setState({signedIn: false});
  };

  render() {
    return (
      <AppBar
        title={<Link to="/" style={styles.title}>Serverless WebApp Starter</Link>}
        onTitleTouchTap={this.goHome}
        iconElementRight={this.state.signedIn ? getProfileMenu(this.handleSignOut) : getSignInButton(this.handleSignIn)}
      />
    );
  };
}

export default Header;
