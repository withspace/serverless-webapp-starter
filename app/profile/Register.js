import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-toolbox/lib/button";
import {Input} from "react-toolbox/lib/input";
import CognitoService from "./CognitoService";
import {ErrorMessage, Loader} from "../common/messages"

const emptyState = () => ({
  email: '',
  password: '',
  passwordRepeated: '',
  error: null,
  loading: false
});

class Register extends React.Component {

  state = emptyState();

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  register = () => {

    const onSuccess = (user) => {
      this.setState({...emptyState(), success: true});
      this.props.auth.updateUser(user);
    };

    const onFailure = (error) => {
      this.setState({...this.state, error: error, loading: false});
    };

    this.setState({...this.state, loading: true});

    CognitoService.register({
      email: this.state.email,
      password: this.state.password,
      onSuccess: onSuccess,
      onFailure: onFailure
    });
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
        {this.state.error && <ErrorMessage text={this.state.error.message}/>}
        {this.state.loading ?
          <Loader text="Registering user..."/> :
          <Button label='Register' onClick={this.register} raised primary/>
        }
        {this.state.success && <Redirect push={true} to="/profile/confirm-registration"/>}
      </div>
    );
  }
}

export default Register;