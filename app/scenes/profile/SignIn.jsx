import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import { FormFields, withFormFields } from '../../components/withFormFields';
import { FormState, withFormState } from '../../components/withFormState';
import { Auth, User } from '../../services/auth';

class SignIn extends React.Component {

  handleSignIn = () => {
    const onSuccess = () => {
      // nothing
    };

    const onFailure = (error) => {
      this.props.form.handleFailure(error.message);
    };

    this.props.form.startLoading('Signing in...');

    this.props.auth.signIn({
      email: this.props.fields.values.email,
      password: this.props.fields.values.password,
      onSuccess,
      onFailure,
    });
  };

  render() {
    return (
      <div>
        <h1>Sign in</h1>
        {this.props.form.infoComponent}
        <Input
          type="text"
          label="E-mail Address"
          name="email"
          value={this.props.fields.values.email}
          onChange={this.props.fields.handleChange('email')}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          value={this.props.fields.values.password}
          onChange={this.props.fields.handleChange('password')}
        />
        <Button label="Sign in" onClick={this.handleSignIn} raised primary />
      </div>
    );
  }
}

SignIn.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  fields: PropTypes.instanceOf(FormFields).isRequired,
  form: PropTypes.instanceOf(FormState).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};

const SignInExt = withFormState(withFormFields(
  SignIn,
  ({ user }) => ({ email: user.email || '', password: '' }),
));

export default SignInExt;
