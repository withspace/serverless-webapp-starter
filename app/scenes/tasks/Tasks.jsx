import React from 'react';
import PropTypes from 'prop-types';
import { Task, withTasks } from '../../data';
import TaskView from './TaskView';
import CreateTaskView from './CreateTaskView';

function Tasks({ tasks, updateTask, createTask }) {
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
      <div>
        <CreateTaskView createTask={createTask}/>
      </div>
    </div>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
  updateTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const TasksExt = withTasks(Tasks);

export default TasksExt;
