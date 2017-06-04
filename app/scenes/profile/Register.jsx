import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import { FormFields, withFormFields } from '../../components/withFormFields';
import { FormState, withFormState } from '../../components/withFormState';
import Auth from '../../services/auth/Auth';

function register({ auth, form, fields }) {
  const onSuccess = () => {
    fields.reset();
    form.handleSuccess(<Redirect push to="/profile/confirm-registration" />);
  };

  const action = () =>
    auth.register({
      email: fields.values.email,
      password: fields.values.password,
      onSuccess,
      onFailure: (error) => form.handleFailure(error.message),
    });

  form.submit(action, 'Registering...');
}

function Register({ auth, form, fields }) {
  return (
    <div>
      <h1>Register</h1>
      Already registered? <Link to="/profile/sign-in">Sign in</Link> or <Link to="/profile/confirm-registration">confirm
      registration</Link>.
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
      <Input
        type="password"
        label="Repeat password"
        name="passwordRepeated"
        value={fields.values.passwordRepeated}
        onChange={fields.handleChange('passwordRepeated')}
      />
      <Button
        label="Register"
        onClick={() => register({ auth, form, fields })}
        raised
        primary
      />
    </div>
  );
}

Register.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  fields: PropTypes.instanceOf(FormFields).isRequired,
  form: PropTypes.instanceOf(FormState).isRequired,
};

const RegisterExt = withFormState(withFormFields(
  Register,
  () => ({ email: '', password: '', passwordRepeated: '' }),
));

export default RegisterExt;
