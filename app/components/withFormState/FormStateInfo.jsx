import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Loader, SuccessMessage } from './../messages';

export default function FormStateInfo({ loading, error, success }) {
  if (loading) { return <Loader >{loading}</Loader>; }
  if (error) { return <ErrorMessage>{error}</ErrorMessage>; }
  if (success) { return <SuccessMessage> {success}</SuccessMessage>; }
  return <div />;
}

const stringOrComponent = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.element,
]);

FormStateInfo.propTypes = {
  loading: stringOrComponent,
  error: stringOrComponent,
  success: stringOrComponent,
};

FormStateInfo.defaultProps = {
  loading: null,
  error: null,
  success: null,
};
