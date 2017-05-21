import React, { PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import { ErrorMessage, Loader } from '../common/messages';
import Auth from './Auth';
import User from './User';

export default class ConfirmRegistration extends React.Component {

  state = this.initialState();

  initialState() {
    return {
      email: this.props.user.email || '',
      code: '',
      error: null,
      loading: false,
      success: false,
    };
  }

  handleChange = name => value => this.setState({ ...this.state, [name]: value });

  handleRegistrationConfirmation = () => {
    const onSuccess = () => {
      this.setState({ ...this.initialState(), success: true });
    };

    const onFailure = (error) => {
      this.setState({ ...this.state, error, loading: false });
    };

    this.setState({ ...this.state, loading: true });

    this.props.auth.confirmRegistration({
      email: this.state.email,
      code: this.state.code,
      onSuccess,
      onFailure,
    });
  };

  handleRequestingCodeAgain = () => {
    const onSuccess = () => {
      this.setState({ ...this.state, code: '', loading: false });
    };

    const onFailure = (error) => {
      this.setState({ ...this.state, error, loading: false });
    };

    this.setState({ ...this.state, loading: true });

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
        {this.state.error && <ErrorMessage text={this.state.error.message} />}
        {this.state.loading
          ? <Loader text="Confirming registration code..." />
          : <div>
            <Button label="Confirm registration" onClick={this.handleRegistrationConfirmation} raised primary />
            &nbsp;
            <Button label="Request code again" onClick={this.handleRequestingCodeAgain} />
          </div>
        }
        {this.state.success && <Redirect push to="/profile/sign-in" />}
      </div>
    );
  }
}


ConfirmRegistration.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};
