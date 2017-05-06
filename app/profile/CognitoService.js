import {AuthenticationDetails, CognitoUserPool, CognitoUserAttribute, CognitoUser} from 'amazon-cognito-identity-js';
import {cognitoConfig} from "../config";
import User from "./User";

const userPool = new CognitoUserPool({
  UserPoolId: cognitoConfig.poolId,
  ClientId: cognitoConfig.appClientId
});

const register = ({email, password, onSuccess, onFailure}) => {

  const emailAttr = new CognitoUserAttribute({
    Name: 'email',
    Value: email
  });

  userPool.signUp(email, password, [emailAttr], null, (error, response) => {
    if (error) {
      onFailure(error);
    } else {
      onSuccess(new User(email, false));
    }
  });
};

const confirmRegistration = ({email, code, onSuccess, onFailure}) => {

  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool
  });

  cognitoUser.confirmRegistration(code, true, (error, response) => {
    if (error) {
      onFailure(error);
    } else {
      onSuccess(new User(email, false));
    }
  });
};

const requestCodeAgain = ({email, onSuccess, onFailure}) => {

  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool
  });

  cognitoUser.resendConfirmationCode((error, response) => {
    if (error) {
      onFailure(error);
    } else {
      onSuccess(new User(email, false))
    }
  });
};

const signIn = ({email, password, onSuccess, onFailure}) => {

  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password
  });

  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool
  });

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (response) => onSuccess(new User(email, true)),
    onFailure: (error) => onFailure(error)
  });
};

const signOut = ({email, onSuccess}) => {

  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool
  });

  cognitoUser.signOut();
  onSuccess();
};

const CognitoService = {
  register: register,
  confirmRegistration: confirmRegistration,
  requestCodeAgain: requestCodeAgain,
  signIn: signIn,
  signOut: signOut
};

export default CognitoService;