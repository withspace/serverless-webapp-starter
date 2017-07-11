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

  componentWillReceiveProps(nextProps) {
    const nextTaskName = nextProps.task.name;
    if (nextTaskName !== this.state.tempName) { this.setState({ tempName: nextTaskName }); }
  }

  updateTempName = (tempName) => this.setState({ tempName });

  updateNameOrRemove = () => {
    const tempName = this.state.tempName;
    const { task, updateTask, removeTask } = this.props;
    if (tempName && tempName.length) {
      return updateTask(task.withName(tempName));
    }
    return removeTask(task);
  };

  render() {
    const { task, updateTask } = this.props;
    const tempName = this.state.tempName;
    let taskButton = null;

    if (task.isDone) {
      taskButton = (
        <Button
          label="Done"
          className={styles.buttonDone}
          raised
          onClick={() => updateTask(task.todo())}
        />
      );
    } else if (task.isDoing) {
      taskButton = (
        <Button
          label="Doing"
          className={styles.buttonDoing}
          raised
          onClick={() => updateTask(task.done())}
        />
      );
    } else {
      taskButton = (
        <Button
          label="To do"
          className={styles.buttonTodo}
          raised
          onClick={() => updateTask(task.doing())}
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
            onBlur={this.updateNameOrRemove}
          />
        </div>
      </div>
    );
  }
}

TaskView.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  updateTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};
