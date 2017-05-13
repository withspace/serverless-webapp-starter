import React from "react";
import {Redirect} from "react-router-dom";
import {Button} from "react-toolbox/lib/button";
import {Input} from "react-toolbox/lib/input";
import {ErrorMessage, Loader} from "../common/messages"

class ConfirmRegistration extends React.Component {

  static emptyState = () => ({
    email: this.props.user.email || '',
    code: '',
    error: null,
    loading: false,
    success:false
  });

  state = ConfirmRegistration.emptyState();

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  confirmRegistration = () => {

    const onSuccess = () => {
      this.setState({...ConfirmRegistration.emptyState(), success: true})
    };

    const onFailure = (error) => {
      this.setState({...this.state, error, loading: false});
    };

    this.setState({...this.state, loading: true});

    this.props.auth.confirmRegistration({
      email: this.state.email,
      code: this.state.code,
      onSuccess,
      onFailure
    })
  };

  requestCodeAgain = () => {

    const onSuccess = (user) => {
      this.setState({...this.state, loading: false});
    };

    const onFailure = (error) => {
      this.setState({...this.state, error, loading: false});
    };

    this.setState({...this.state, loading: true});

    this.props.auth.requestCodeAgain({
      email: this.state.email,
      onSuccess,
      onFailure
    });
  };

  render() {
    return (
      <div>
        <h1>Confirm registration</h1>
        <Input
          type='text'
          label='E-mail Address'
          name='email'
          value={this.state.email}
          onChange={this.handleChange.bind(this, 'email')}
        />
        <Input
          type='text'
          label='Confirmation code'
          name='code'
          value={this.state.code}
          onChange={this.handleChange.bind(this, 'code')}
        />
        {this.state.error && <ErrorMessage text={this.state.error.message}/>}
        {this.state.loading
          ? <Loader text="Confirming registration code..."/>
          : <div>
            <Button label='Confirm registration' onClick={this.confirmRegistration} raised primary/>
            &nbsp;
            <Button label='Request code again' onClick={this.requestCodeAgain}/>
          </div>
        }
        {this.state.success && <Redirect push={true} to="/profile/sign-in"/>}
      </div>
    );
  }
}

export default ConfirmRegistration;