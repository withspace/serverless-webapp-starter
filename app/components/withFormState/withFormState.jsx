import React from 'react';
import FormState from './FormState';
import FormStateInfo from './FormStateInfo';

export default function withFormState(WrappedComponent) {
  class WithFormState extends React.Component {

    state = {
      loading: null,
      error: null,
      success: null,
    };

    handleFailure = (info) => this.setState({ loading: null, error: info, success: null });

    handleSuccess = (info) => this.setState({ loading: null, error: null, success: info });

    submit = (operation, info) => {
      this.setState({ ...this.state, loading: info });
      return operation();
    };

    render() {
      const form = new FormState({
        submit: this.submit,
        handleFailure: this.handleFailure,
        handleSuccess: this.handleSuccess,
        infoComponent: <FormStateInfo {...this.state} />,
      });
      return <WrappedComponent form={form} {...this.props} />;
    }
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithFormState.displayName = `withFormState(${wrappedComponentName})`;

  return WithFormState;
}
