import React from 'react';
import PropTypes from 'prop-types';
import { FontIcon } from 'react-toolbox/lib/font_icon';
import { ProgressBar } from 'react-toolbox/lib/progress_bar';

const messageStyles = {
  error: {
    color: 'indianred',
    margin: '1em 0',
  },
  loading: {
    color: 'gray',
  },
  success: {
    color: 'forestgreen',
    margin: '1em 0',
  },
  loadingIcon: {
    width: '2em',
    height: '2em',
  },
  messageIcon: {
    float: 'left',
    marginTop: '-0.3em',
    fontSize: '2em',
  },
  messageText: {
    marginLeft: '2.5em',
  },
};

export function ErrorMessage({ children }) {
  return (
    <div style={messageStyles.error}>
      <FontIcon style={messageStyles.messageIcon}>priority_high</FontIcon>
      <div style={messageStyles.messageText}>{children}</div>
    </div>
  );
}

ErrorMessage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

ErrorMessage.defaultProps = {
  children: '',
};

export function Loader({ children }) {
  return (
    <div style={messageStyles.loading}>
      <ProgressBar type="linear" mode="indeterminate" />
      <div>{children}</div>
    </div>
  );
}

Loader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

Loader.defaultProps = {
  children: '',
};

export function SuccessMessage({ children }) {
  return (
    <div style={messageStyles.success}>
      <FontIcon style={messageStyles.messageIcon}>check</FontIcon>
      <div style={messageStyles.messageText}>{children}</div>
    </div>
  );
}

SuccessMessage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

SuccessMessage.defaultProps = {
  children: '',
};
