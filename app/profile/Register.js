import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-toolbox/lib/button";
import {Input} from "react-toolbox/lib/input";

class Register extends React.Component {

  state = {email: '', password: '', passwordRepeated: ''};

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  register = () => {
    console.log('Registration flow not implemented yet');
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        Already registered? <Link to="/profile/sign-in">Sign in</Link> or <Link to="/profile/confirm-registration">confirm
        registration</Link>.
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
        <Input
          type='password'
          label='Repeat password'
          name='passwordRepeated'
          value={this.state.passwordRepeated}
          onChange={this.handleChange.bind(this, 'passwordRepeated')}
        />
        <Button label='Register' onClick={this.register} raised primary/>
      </div>
    );
  }
}

export default Register;