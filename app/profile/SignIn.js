import React from "react";
import {Input} from "react-toolbox/lib/input"
import {Button} from "react-toolbox/lib/button"

class SignIn extends React.Component {

  state = {email: '', password: ''};

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <Input
          type='text'
          label='E-mail Address'
          name='email'
          value={this.state.email}
          onChange={this.handleChange.bind(this, 'email')}
        />
        <Input
          type='password'
          label='Password'
          name='password'
          value={this.state.password}
          onChange={this.handleChange.bind(this, 'password')}
        />
        <Button label='Sign in' onClick={this.props.auth.handleSignIn} raised primary/>
      </div>
    );
  }
}

export default SignIn;