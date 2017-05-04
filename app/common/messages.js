import React from "react";
import {FontIcon} from "react-toolbox/lib/font_icon";
import {ProgressBar} from "react-toolbox/lib/progress_bar";

const styles = {
  error: {
    color: 'indianred'
  },
  loading: {
    color: 'gray'
  },
  loadingIcon: {
    width: '2em',
    height: '2em'
  },
  messageIcon: {
    float: 'left',
    marginTop: '-0.2em',
    fontSize: '2em'
  },
  messageText: {
    marginLeft: '2.5em'
  }
};

export const ErrorMessage = ({text, ...rest}) => (
  <p style={styles.error}>
    <FontIcon style={styles.messageIcon}>error_outline</FontIcon>
    <div style={styles.messageText}>{text}</div>
  </p>
);

export const Loader = ({text, ...rest}) => (
  <p style={styles.loading}>
    <ProgressBar type="linear" mode="indeterminate" />
    <div>{text}</div>
  </p>
);
