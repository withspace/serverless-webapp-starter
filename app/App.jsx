import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'react-toolbox/lib/layout';
import Header from './components/Header';
import { Auth, User } from './services/auth';
import Routes from './scenes/Routes';

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

/* global document:true */
ReactDOM.render(<App />, document.getElementById('app'));
