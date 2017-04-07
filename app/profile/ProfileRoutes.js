import Profile from "./Profile";
import React from "react";
import {PrivateRoute, PublicRoute} from "../common/routes";
import SignIn from "./SignIn";
import Register from "./Register";
import ConfirmRegistration from "./ConfirmRegistration";

const SignInOrRegister = ({user, auth}) => (
  <div>
    <SignIn user="user" auth="auth"/>
  </div>
);

const ProfileRoutes = ({user, auth, ...rest}) => (
  <div>
    <PublicRoute path="/profile/sign-in" component={SignIn} user={user} auth={auth}/>
    <PublicRoute path="/profile/register" component={Register} user={user} auth="{auth}"/>
    <PublicRoute path="/profile/confirm-registration" component={ConfirmRegistration} user={user}/>
    <PrivateRoute path="/profile/home" component={Profile} user={user}/>
  </div>
);

export default ProfileRoutes;
