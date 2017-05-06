import User from "./User";

class Auth {

  constructor(updateUser) {
    this.updateUser = updateUser;
  }

  handleRegister = (event) => {
    console.log('register', event);
  };

  handleSignIn = (user) => this.updateUser(user);

  handleSignOut = () => this.updateUser(new User(null, false));

}

export default Auth;