import User from './User';
import CognitoService from './CognitoService';

class Auth {

  constructor({ updateUser }) {
    this.updateUser = (user) => {
      console.log('Update user', user);
      updateUser(user);
    };

    this.cognito = new CognitoService();
  }

  register({ email, password, onSuccess, onFailure }) {
    const registerSuccess = () => {
      this.updateUser(User.signedOut(email));
      onSuccess();
    };

    this.cognito.register({ email, password, ...{ onSuccess: registerSuccess }, onFailure });
  }

  confirmRegistration({ email, code, onSuccess, onFailure }) {
    const confirmSuccess = () => {
      this.updateUser(User.signedOut(email));
      onSuccess();
    };

    this.cognito.confirmRegistration({ email, code, ...{ onSuccess: confirmSuccess }, onFailure });
  }

  requestCodeAgain({ email, onSuccess, onFailure }) {
    const requestSuccess = () => {
      this.updateUser(User.signedOut(email));
      onSuccess();
    };

    this.cognito.requestCodeAgain({ email, ...{ onSuccess: requestSuccess }, onFailure });
  }

  signIn({ email, password, onSuccess, onFailure }) {
    const signInSuccess = () => {
      this.updateUser(User.signedIn(email), onSuccess);
      onSuccess();
    };

    this.cognito.signIn({ email, password, ...{ onSuccess: signInSuccess }, onFailure });
  }

  signOut({ email }) {
    this.cognito.signOut({ email, onSuccess: () => this.updateUser(User.signedOut(email)) });
  }
}

export default Auth;
