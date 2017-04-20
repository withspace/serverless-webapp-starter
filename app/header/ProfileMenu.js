import React, {Component} from "react";
import {IconMenu, MenuItem} from "react-toolbox/lib/menu";

class ProfileMenu extends Component {

  navigateTo = path => () => {
    this.context.router.history.push(path);
  };

  render() {
    return (
      <IconMenu icon="more_vert" position="topRight" menuRipple>
        <MenuItem value="profile" caption="Profile" onClick={this.navigateTo("/profile/home")}/>
        <MenuItem value="signOut" caption="Sign out" onClick={this.props.auth.handleSignOut}/>
      </IconMenu>
    );
  }
}

ProfileMenu.contextTypes = {
  router: React.PropTypes.object
};

export default ProfileMenu;
