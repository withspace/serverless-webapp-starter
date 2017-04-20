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

const Header = (props) => (
  <AppBar title="Serverless WebApp Starter" leftIcon="menu">
    <Navigation type="horizontal">
      {props.user.signedIn ? <ProfileMenu auth={props.auth}/> : <SignInButtons auth={props.auth}/>}
    </Navigation>
  </AppBar>
);

export default Header;
