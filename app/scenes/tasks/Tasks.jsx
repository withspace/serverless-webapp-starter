import React from 'react';
import PropTypes from 'prop-types';
import { Task, withTasks } from '../../data';
import TaskView from './TaskView';

function Tasks({ tasks, updateTask }) {
  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {tasks.map((task) => (
          <TaskView
            key={task.id}
            task={task}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
  updateTask: PropTypes.function.isRequired,
};

const TasksExt = withTasks(Tasks);

export default TasksExt;
