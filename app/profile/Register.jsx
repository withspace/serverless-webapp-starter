import React, { PropTypes } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import { ErrorMessage, Loader } from '../common/messages';
import Auth from './Auth';

class Register extends React.Component {

  getInitialState() {
    return {
      email: '',
      password: '',
      passwordRepeated: '',
      error: null,
      loading: false,
      success: false,
    };
  }

  handleChange(name) {
    return value => this.setState({ ...this.state, [name]: value });
  }

  register() {
    const onSuccess = () => {
      this.setState({ ...this.getInitialState(), success: true });
    };

    const onFailure = (error) => {
      this.setState({ ...this.state, error, loading: false });
    };

    this.setState({ ...this.state, loading: true });

    this.props.auth.register({
      email: this.state.email,
      password: this.state.password,
      onSuccess,
      onFailure,
    });
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        Already registered? <Link to="/profile/sign-in">Sign in</Link> or <Link to="/profile/confirm-registration">confirm
        registration</Link>.
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
        <Input
          type="password"
          label="Repeat password"
          name="passwordRepeated"
          value={this.state.passwordRepeated}
          onChange={this.handleChange('passwordRepeated')}
        />
        {this.state.error && <ErrorMessage text={this.state.error.message} />}
        {this.state.loading
          ? <Loader text="Registering user..." />
          : <Button label="Register" onClick={() => this.register()} raised primary />
        }
        {this.state.success && <Redirect push to="/profile/confirm-registration" />}
      </div>
    );
  }
}

Register.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
};

export default Register;
