import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import { FormFields, withFormFields } from '../../components/withFormFields';
import { FormState, withFormState } from '../../components/withFormState';
import { Auth, User } from '../../services/auth';

function confirmRegistration({ auth, form, fields }) {
  const onSuccess = () => {
    fields.reset();
    form.handleSuccess(<Redirect push to="/profile/sign-in" />);
  };

  const action = () =>
    auth.confirmRegistration({
      email: fields.values.email,
      code: fields.values.code,
      onSuccess,
      onFailure: (error) => form.handleFailure(error.message),
    });

  form.submit(action, 'Confirming registration...');
}

function requestCodeAgain({ auth, form, fields }) {
  const onSuccess = () => {
    const message = `Confirmation code has been sent to ${fields.values.email}`;
    fields.reset();
    form.handleSuccess(message);
  };

  const action = () =>
    auth.requestCodeAgain({
      email: fields.values.email,
      onSuccess,
      onFailure: (error) => form.handleFailure(error.message),
    });

  form.submit(action, 'Sending confirmation code...');
}


function ConfirmRegistration({ auth, form, fields }) {
  return (
    <div>
      <h1>Confirm registration</h1>
      {form.infoComponent}
      <Input
        type="text"
        label="E-mail Address"
        name="email"
        value={fields.values.email}
        onChange={fields.handleChange('email')}
      />
      <Input
        type="text"
        label="Confirmation code"
        name="code"
        value={fields.values.code}
        onChange={fields.handleChange('code')}
      />
      <Button
        label="Confirm registration"
        onClick={() => confirmRegistration({ auth, form, fields })}
        raised
        primary
      />
      &nbsp;
      <Button
        label="Request code again"
        onClick={() => requestCodeAgain({ auth, form, fields })}
      />
    </div>
  );
}

ConfirmRegistration.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  fields: PropTypes.instanceOf(FormFields).isRequired,
  form: PropTypes.instanceOf(FormState).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};

const ConfirmRegistrationExt = withFormState(withFormFields(
  ConfirmRegistration,
  ({ user }) => ({ email: user.email || '', code: '' }),
));

export default ConfirmRegistrationExt;
