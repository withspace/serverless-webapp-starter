import User from "./User";
import CognitoService from "./CognitoService";

class Auth {

  constructor(updateUser) {

    this.updateUser = (user) => {
      console.log('Update user', user);
      this.user = user;
      updateUser(user);
    };

    this.cognitoService = new CognitoService();
  }

  register({email, password, onSuccess, onFailure}) {

    const registerSuccess = () => {
      this.updateUser(User.signedOut(email));
      onSuccess();
    };

    this.cognitoService.register({email, password, ...{onSuccess: registerSuccess}, onFailure});
  }

  confirmRegistration({email, code, onSuccess, onFailure}) {

    const confirmSuccess = () => {
      this.updateUser(User.signedOut(email));
      onSuccess();
    };

    this.cognitoService.confirmRegistration({email, code, ...{onSuccess: confirmSuccess}, onFailure});
  }

  requestCodeAgain({email, onSuccess, onFailure}) {

    const requestSuccess = () => {
      this.updateUser(User.signedOut(email));
      onSuccess();
    };

    this.cognitoService.requestCodeAgain({email, ...{onSuccess: requestSuccess}, onFailure})
  }

  signIn({email, password, onSuccess, onFailure}) {

    const signInSuccess = () => {
      this.updateUser(User.signedIn(email), onSuccess);
      onSuccess();
    };

    this.cognitoService.signIn({email, password, ...{onSuccess: signInSuccess}, onFailure});
  }

  signOut() {
    this.cognitoService.signOut({email: this.user.email, onSuccess: () => this.updateUser(User.signedOut(null))});
  }
}

export default Auth;