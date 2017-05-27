import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import { FormState, withFormState } from '../../components/withFormState';
import { Auth, User } from '../../services/auth';

class SignIn extends React.Component {

  state = this.initialState();

  initialState() {
    return {
      email: this.props.user.email || '',
      password: '',
    };
  }

  handleChange = name => value => this.setState({ ...this.state, [name]: value });

  handleSignIn = () => {
    const onSuccess = () => {
      // nothing
    };

    const onFailure = (error) => {
      this.props.formState.handleFailure(error.message);
    };

    this.props.formState.startLoading('Signing in...');

    this.props.auth.signIn({
      email: this.state.email,
      password: this.state.password,
      onSuccess,
      onFailure,
    });
  };

  render() {
    return (
      <div>
        <h1>Sign in</h1>
        {this.props.formState.infoComponent}
        <Input
          type="text"
          label="E-mail Address"
          name="email"
          value={this.state.email}
          onChange={this.handleChange('email')}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange('password')}
        />
        <Button label="Sign in" onClick={this.handleSignIn} raised primary />
      </div>
    );
  }
}

SignIn.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  formState: PropTypes.instanceOf(FormState).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};

const SignInExt = withFormState(SignIn);
export default SignInExt;
