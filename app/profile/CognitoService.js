import { AuthenticationDetails, CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import cognitoConfig from '../config';

export default class CognitoService {

  userPool = new CognitoUserPool({
    UserPoolId: cognitoConfig.poolId,
    ClientId: cognitoConfig.appClientId,
  });

  cognitoUser(email) {
    return new CognitoUser({ Username: email, Pool: this.userPool });
  }

  register({ email, password, onSuccess, onFailure }) {
    const emailAttr = new CognitoUserAttribute({
      Name: 'email',
      Value: email,
    });

    this.userPool.signUp(email, password, [emailAttr], null, (error) => {
      if (error) {
        onFailure(error);
      } else {
        onSuccess();
      }
    });
  }

  confirmRegistration({ email, code, onSuccess, onFailure }) {
    const cognitoUser = this.cognitoUser(email);

    cognitoUser.confirmRegistration(code, true, (error) => {
      if (error) {
        onFailure(error);
      } else {
        onSuccess();
      }
    });
  }

  requestCodeAgain({ email, onSuccess, onFailure }) {
    const cognitoUser = this.cognitoUser(email);

    cognitoUser.resendConfirmationCode((error) => {
      if (error) {
        onFailure(error);
      } else {
        onSuccess();
      }
    });
  }

  signIn({ email, password, onSuccess, onFailure }) {
    const cognitoUser = this.cognitoUser(email);

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: () => onSuccess(),
      onFailure: error => onFailure(error),
    });
  }

  signOut({ email, onSuccess }) {
    this.cognitoUser(email).signOut();
    onSuccess();
  }
}
