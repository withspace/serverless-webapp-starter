import React from "react";

const Profile = ({user, ...rest}) => (
  <div>
    <h1>Profile</h1>
    You are signed in as <strong>{user.email}</strong>.
  </div>
);

export default Profile;