import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import Header from "./header/Header";
import {Layout} from "react-toolbox/lib/layout";
import User from "./profile/User";
import Auth from "./profile/Auth";

class App extends Component {

  auth = new Auth(user => {
    this.setState({...this.state, user});
  });

  state = {
    user: new User(null, false)
  };

  render() {
    return (
      <Layout>
        <Router>
          <div>
            <Header auth={this.auth} user={this.state.user}/>
            <div style={{margin: '0 3em'}}>
              <Routes auth={this.auth} user={this.state.user}/>
            </div>
          </div>
        </Router>
      </Layout>
    );
  }
}

export default App;
