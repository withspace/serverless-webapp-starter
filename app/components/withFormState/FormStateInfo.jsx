import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Loader } from './../messages';

export default function FormStateInfo({ loading, error, success }) {
  if (loading) { return <Loader text={loading} />; }
  if (error) { return <ErrorMessage text={error} />; }
  if (success) { return <div>{success}</div>; }
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
