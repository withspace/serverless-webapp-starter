import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'react-toolbox/lib/layout';
import Header from './header/Header';
import Auth from './profile/Auth';
import User from './profile/User';
import Routes from './Routes';

class App extends Component {

  state = {
    user: User.signedOut(null),
  };

  auth = new Auth({
    updateUser: user => this.setState({ ...this.state, user }),
  });

  render() {
    return (
      <Layout>
        <Router>
          <div>
            <Header auth={this.auth} user={this.state.user} />
            <div style={{ margin: '0 3em' }}>
              <Routes auth={this.auth} user={this.state.user} />
            </div>
          </div>
        </Router>
      </Layout>
    );
  }
}

export default App;
