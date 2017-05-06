import React from "react";
import {Input} from "react-toolbox/lib/input"
import {Button} from "react-toolbox/lib/button"
import CognitoService from "./CognitoService";
import {ErrorMessage, Loader} from "../common/messages"

const initialState = (user) => ({
  email: user && user.email || '',
  password: '',
  error: null,
  loading: false
});

class SignIn extends React.Component {

  state = initialState(this.props.user);

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  signIn = () => {

    const onSuccess = (user) => {
      this.setState({...initialState(user)});
      this.props.auth.handleSignIn(user);
    };

    const onFailure = (error) => {
      this.setState({...this.state, error: error, loading: false});
    };

    this.setState({...this.state, loading: true});

    CognitoService.signIn({
      email: this.state.email,
      password: this.state.password,
      onSuccess: onSuccess,
      onFailure: onFailure
    });
  };

  render() {
    return (
      <div>
        <h1>Sign in</h1>
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
        {this.state.error && <ErrorMessage text={this.state.error.message}/>}
        {this.state.loading ?
          <Loader text="Signing in..."/> :
          <Button label='Sign in' onClick={this.signIn} raised primary/>
        }
      </div>
    );
  }
}

export default SignIn;