import React from "react";
import {Home} from "./home/Home";
import ProfileRoutes from "./profile/ProfileRoutes";
import {DefaultRoute} from "./common/routes";

const Routes = ({user, auth, ...rest}) => (
  <div>
    <DefaultRoute exact path="/" component={Home}/>
    <ProfileRoutes user={user} auth={auth}/>
  </div>
);

export default Routes;