import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import { withFormState, FormState } from '../../components/withFormState';
import { Auth, User } from '../../services/auth';

class ConfirmRegistration extends React.Component {

  state = this.initialState();

  initialState() {
    return {
      email: this.props.user.email || '',
      code: '',
    };
  }

  handleChange = name => value => this.setState({ ...this.state, [name]: value });

  handleRegistrationConfirmation = () => {
    const onSuccess = () => {
      this.setState(this.initialState());
      this.props.form.handleSuccess(<Redirect push to="/profile/sign-in" />);
    };

    const onFailure = (error) => {
      this.props.form.handleFailure(error.message);
    };

    this.props.form.startLoading('Confirming registration...');

    this.props.auth.confirmRegistration({
      email: this.state.email,
      code: this.state.code,
      onSuccess,
      onFailure,
    });
  };

  handleRequestingCodeAgain = () => {
    const onSuccess = () => {
      this.setState({ ...this.state, code: '' });
      this.props.form.handleSuccess();
    };

    const onFailure = (error) => {
      this.props.form.handleFailure(error.message);
    };

    this.props.form.startLoading('Sending confirmation code...');

    this.props.auth.requestCodeAgain({
      email: this.state.email,
      onSuccess,
      onFailure,
    });
  };

  render() {
    return (
      <div>
        <h1>Confirm registration</h1>
        {this.props.form.infoComponent}
        <Input
          type="text"
          label="E-mail Address"
          name="email"
          value={this.state.email}
          onChange={this.handleChange('email')}
        />
        <Input
          type="text"
          label="Confirmation code"
          name="code"
          value={this.state.code}
          onChange={this.handleChange('code')}
        />
        <Button label="Confirm registration" onClick={this.handleRegistrationConfirmation} raised primary />
        &nbsp;
        <Button label="Request code again" onClick={this.handleRequestingCodeAgain} />
      </div>
    );
  }
}

ConfirmRegistration.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  form: PropTypes.instanceOf(FormState).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};

const ConfirmRegistrationExt = withFormState(ConfirmRegistration);
export default ConfirmRegistrationExt;
