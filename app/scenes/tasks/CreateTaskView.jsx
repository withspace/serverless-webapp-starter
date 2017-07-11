import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-toolbox/lib/input';
import styles from './tasks.css';
import { Task } from '../../data';

export default class CreateTaskView extends React.Component {

  state = {
    tempName: '',
  };

  createOrSkip = () => {
    const tempName = this.state.tempName;
    if (tempName && tempName.length) {
      this.props.createTask(Task.create(tempName));
      this.updateTempName('');
    }
  };

  updateTempName = (tempName) => this.setState({ tempName });

  render() {
    return (
      <div className={styles.task}>
        <div className={styles.taskButton}>&nbsp;</div>
        <div className={styles.taskInput}>
          <Input
            type="text"
            hint="New task name"
            multiline
            value={this.state.tempName}
            onChange={this.updateTempName}
            onBlur={this.createOrSkip}
          />
        </div>
      </div>
    );
  }
}

CreateTaskView.propTypes = {
  createTask: PropTypes.func.isRequired,
};
