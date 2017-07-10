import React from 'react';
import PropTypes from 'prop-types';
import { Task, withTasks } from '../../data';
import TaskView from './TaskView';

function Tasks({ tasks }) {
  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {tasks.map((task) => <TaskView key={task.id} task={task} />)}
      </div>
    </div>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
};

const TasksExt = withTasks(Tasks);

export default TasksExt;
