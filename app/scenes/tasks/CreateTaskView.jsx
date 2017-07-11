import React from "react";
import PropTypes from "prop-types";
import {Input} from "react-toolbox/lib/input";
import styles from "./tasks.css";
import {Task} from "../../data";

export default class CreateTaskView extends React.Component {

  state = {
    tempName: '',
  };

  updateTempName = (tempName) => this.setState({ tempName });

  render() {
    const tempName = this.state.tempName;
    const createTask = this.props.createTask;
    return (
      <div className={styles.task}>
        <div className={styles.taskButton}>&nbsp;</div>
        <div className={styles.taskInput}>
          <Input
            type="text"
            hint="New task name"
            multiline
            value={tempName}
            onChange={this.updateTempName}
            onBlur={() => createTask(Task.create(tempName))}
          />
        </div>
      </div>
    );
  }
}

CreateTaskView.propTypes = {
  createTask: PropTypes.func.isRequired,
};
