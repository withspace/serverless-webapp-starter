import React, {Component} from "react";
import {IconMenu, MenuItem} from "react-toolbox/lib/menu";
import CognitoService from "../profile/CognitoService";

class ProfileMenu extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  };

  openProfile = () => {
    this.context.router.history.push('/profile/home');
  };

  signOut = () => {
    CognitoService.signOut({
      email: this.props.user.email,
      onSuccess: this.props.auth.handleSignOut()
    });
  };

  render() {
    return (
      <IconMenu icon="more_vert" position="topRight" menuRipple>
        <MenuItem value="profile" caption="Profile" onClick={this.openProfile}/>
        <MenuItem value="signOut" caption="Sign out" onClick={this.signOut}/>
      </IconMenu>
    );
  }
}

export default ProfileMenu;
