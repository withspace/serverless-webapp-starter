import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import styles from './tasks.css';
import { Task } from '../../data';

export default class TaskView extends React.Component {

  state = {
    tempName: this.props.task.name,
  };

  updateTempName = (tempName) => this.setState({ tempName });

  render() {
    const task = this.props.task;
    const tempName = this.state.tempName;
    let taskButton = null;

    if (task.isDone) {
      taskButton = (
        <Button
          label="Done"
          className={styles.buttonDone}
          raised
          onClick={() => task.todo().save()}
        />
      );
    } else if (task.isDoing) {
      taskButton = (
        <Button
          label="Doing"
          className={styles.buttonDoing}
          raised
          onClick={() => task.done().save()}
        />
      );
    } else {
      taskButton = (
        <Button
          label="To do"
          className={styles.buttonTodo}
          raised
          onClick={() => task.doing().save()}
        />
      );
    }

    return (
      <div className={styles.task}>
        <div className={styles.taskButton}>
          {taskButton}
        </div>
        <div className={styles.taskInput}>
          <Input
            type="text"
            hint="Task name"
            multiline
            value={tempName}
            onChange={this.updateTempName}
            onBlur={() => task.withName(tempName).save()}
          />
        </div>
      </div>
    );
  }
}

TaskView.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
};
