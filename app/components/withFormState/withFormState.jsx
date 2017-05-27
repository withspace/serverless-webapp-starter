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

    handleFailure = info => this.setState({ ...this.state, error: info, loading: null });

    handleSuccess = info => this.setState({ ...this.state, success: info, loading: null });

    startLoading = info => this.setState({ ...this.state, loading: info });

    render() {
      const form = new FormState({
        startLoading: this.startLoading,
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
