import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import Header from "./header/Header";
import {Layout} from "react-toolbox/lib/layout";

class Auth {

  constructor(updateUser) {
    this.updateUser = updateUser;
  }

  handleSignIn = () => this.updateUser({
    signedIn: true
  });

  handleSignOut = () => this.updateUser({
    signedIn: false
  });

}

class App extends Component {

  auth = new Auth(user => {
    console.log('Update user', user);
    this.setState({...this.state, user});
  });

  state = {
    user: {
      signedIn: false
    }
  };

  render() {
    return (
      <Layout>
        <Router>
          <div>
            <Header auth={this.auth} user={this.state.user}/>
            <Routes user={this.state.user}/>
          </div>
        </Router>
      </Layout>
    );
  }
}

export default App;
