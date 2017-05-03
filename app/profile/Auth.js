import User from "./User";

class Auth {

  constructor(updateUser) {
    this.updateUser = updateUser;
  }

  handleSignIn = () => this.updateUser(new User('user@example.com', true));

  handleSignOut = () => this.updateUser(new User(null, false));

}

export default Auth;