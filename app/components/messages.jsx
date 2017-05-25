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
  loadingIcon: {
    width: '2em',
    height: '2em',
  },
  messageIcon: {
    float: 'left',
    marginTop: '-0.2em',
    fontSize: '2em',
  },
  messageText: {
    marginLeft: '2.5em',
  },
};

export function ErrorMessage({ text }) {
  return (
    <div style={messageStyles.error}>
      <FontIcon style={messageStyles.messageIcon}>error_outline</FontIcon>
      <div style={messageStyles.messageText}>{text}</div>
    </div>
  );
}

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export function Loader({ text }) {
  return (
    <div style={messageStyles.loading}>
      <ProgressBar type="linear" mode="indeterminate" />
      <div>{text}</div>
    </div>
  );
}

Loader.propTypes = {
  text: PropTypes.string.isRequired,
};
