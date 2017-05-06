import React from "react";
import {Link, Redirect} from "react-router-dom";
import {Button} from "react-toolbox/lib/button";
import {Input} from "react-toolbox/lib/input";
import {ErrorMessage, Loader} from "../common/messages"

class Register extends React.Component {

  emptyState = () => ({
    email: '',
    password: '',
    passwordRepeated: '',
    error: null,
    loading: false,
    success: false
  });

  state = this.emptyState();

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  register = () => {

    const onSuccess = () => {
      this.setState({...this.emptyState(), success: true});
    };

    const onFailure = (error) => {
      this.setState({...this.state, error: error, loading: false});
    };

    this.setState({...this.state, loading: true});

    this.props.auth.register({
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
        Already registered? <Link to="/profile/sign-in">Sign in</Link> or
        <Link to="/profile/confirm-registration">confirm registration</Link>.
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
        {this.state.loading
          ? <Loader text="Registering user..."/>
          : <Button label='Register' onClick={this.register} raised primary/>
        }
        {this.state.success && <Redirect push={true} to="/profile/confirm-registration"/>}
      </div>
    );
  }
}

export default Register;