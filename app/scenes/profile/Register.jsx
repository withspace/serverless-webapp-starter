import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import { FormState, withFormState } from '../../components/withFormState';
import Auth from '../../services/auth/Auth';

class Register extends React.Component {

  static initialState() {
    return {
      email: '',
      password: '',
      passwordRepeated: '',
    };
  }

  state = Register.initialState();

  handleChange = name => value => this.setState({ ...this.state, [name]: value });

  handleRegistration = () => {
    const onSuccess = () => {
      this.setState({ ...Register.initialState(), success: true });
      this.props.formState.handleSuccess(<Redirect push to="/profile/confirm-registration" />);
    };

    const onFailure = (error) => {
      this.props.formState.handleFailure(error.message);
    };

    this.props.formState.startLoading('Registering...');

    this.props.auth.register({
      email: this.state.email,
      password: this.state.password,
      onSuccess,
      onFailure,
    });
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        Already registered? <Link to="/profile/sign-in">Sign in</Link> or <Link to="/profile/confirm-registration">confirm
        registration</Link>.
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
        <Input
          type="password"
          label="Repeat password"
          name="passwordRepeated"
          value={this.state.passwordRepeated}
          onChange={this.handleChange('passwordRepeated')}
        />
        <Button label="Register" onClick={this.handleRegistration} raised primary />
      </div>
    );
  }
}

Register.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  formState: PropTypes.instanceOf(FormState).isRequired,
};

const RegisterExt = withFormState(Register);
export default RegisterExt;
