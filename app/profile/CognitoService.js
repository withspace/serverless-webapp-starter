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


const CognitoService = {
  register: register,
  confirmRegistration: confirmRegistration,
  requestCodeAgain: requestCodeAgain
};

export default CognitoService;