import React from 'react';
import PropTypes from 'prop-types';
import { Task, TaskRepository, withTasks } from '../../data';
import TaskView from './TaskView';
import CreateTaskView from './CreateTaskView';

function Tasks({ tasks, taskRepository }) {
  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {tasks.map((task) => (
          <TaskView
            key={task.id}
            task={task}
            updateTask={taskRepository.update}
            removeTask={taskRepository.remove}
          />
        ))}
      </div>
      <div>
        <CreateTaskView createTask={taskRepository.create} />
      </div>
    </div>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
  taskRepository: PropTypes.instanceOf(TaskRepository).isRequired,
};

const TasksExt = withTasks(Tasks);

export default TasksExt;
