class User {

  constructor(email, signedIn) {
    this.email = email;
    this.signedIn = signedIn;
  }

  static signedIn = email => new User(email, true);

  static signedOut = email => new User(email, false);
}

export default User;
