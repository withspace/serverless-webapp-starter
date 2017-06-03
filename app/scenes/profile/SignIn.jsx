import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import { FormFields, withFormFields } from '../../components/withFormFields';
import { FormState, withFormState } from '../../components/withFormState';
import { Auth, User } from '../../services/auth';

function signIn({ auth, form, fields }) {
  const action = () =>
    auth.signIn({
      email: fields.values.email,
      password: fields.values.password,
      onSuccess: () => { /* nothing */ },
      onFailure: (error) => form.handleFailure(error.message),
    });

  form.submit(action, 'Signing in...');
}

function SignIn({ auth, form, fields }) {
  return (
    <div>
      <h1>Sign in</h1>
      {form.infoComponent}
      <Input
        type="text"
        label="E-mail Address"
        name="email"
        value={fields.values.email}
        onChange={fields.handleChange('email')}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        value={fields.values.password}
        onChange={fields.handleChange('password')}
      />
      <Button
        label="Sign in"
        onClick={() => signIn({ auth, form, fields })}
        raised
        primary
      />
    </div>
  );
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
