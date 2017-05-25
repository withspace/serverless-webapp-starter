export default class User {

  constructor(email, signedIn) {
    this.email = email;
    this.signedIn = signedIn;
  }
}

User.signedIn = email => new User(email, true);

User.signedOut = email => new User(email, false);
