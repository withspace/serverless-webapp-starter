import React from "react";
import {Button} from "react-toolbox/lib/button";
import {Input} from "react-toolbox/lib/input";

class ConfirmRegistration extends React.Component {

  state = {email: '', code: ''};

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  confirmRegistration = () => {
    console.log('Registration flow not implemented yet');
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
        <Button label='Confirm registration' onClick={this.confirmRegistration} raised primary/>
      </div>
    );
  }
}

export default ConfirmRegistration;