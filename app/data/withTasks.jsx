import React from 'react';
import database from './database';
import TaskRepository from './TaskRepository';

export default function withTasks(WrappedComponent) {
  class WithTasks extends React.Component {

    state = {
      tasks: [],
    };

    componentDidMount() {
      this
        .loadTasks()
        .then(() => database.addChangeListener(this.listenerName, this.loadTasks));
    }

    componentWillUnmount() {
      database.removeChangeListener(this.listenerName);
    }

    loadTasks = () => this.taskRepository.getAll().then((tasks) => this.setState({ tasks }));

    listenerName = `${WithTasks.displayName}-${Math.floor((Math.random() * 9000) + 1000)}`;

    taskRepository = new TaskRepository();

    render() {
      return (
        <WrappedComponent
          tasks={this.state.tasks}
          taskRepository={this.taskRepository}
          {...this.props}
        />
      );
    }
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithTasks.displayName = `withTasks(${wrappedComponentName})`;

  return WithTasks;
}
