import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import Header from "./header/Header";
import {MuiThemeProvider} from "material-ui";

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

const updateUserStateIn = component => user => {
  console.log('Update user', user);
  const newState = Object.assign(component.state, {user: user});
  component.setState(newState);
};

class App extends Component {

  auth = new Auth(updateUserStateIn(this));

  state = {
    user: {
      signedIn: false
    }
  };

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Header auth={this.auth} user={this.state.user}/>
            <Routes auth={this.auth} user={this.state.user}/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
