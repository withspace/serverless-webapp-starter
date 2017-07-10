import React from 'react';
import database from './database';
import { Task } from './Task';

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

    loadTasks = () =>
      database
        .getAll()
        .then((rows) => {
          const tasks = rows.map((row) => Task.fromDoc(row.doc));
          this.setState({ tasks });
        });

    listenerName = `${WithTasks.displayName}-${Math.floor((Math.random() * 9000) + 1000)}`;

    render() {
      return (
        <WrappedComponent
          tasks={this.state.tasks}
          createTask={(task) => database.create(task.asDoc())}
          updateTask={(task) => database.update(task.asDoc())}
          {...this.props}
        />
      );
    }
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithTasks.displayName = `withTasks(${wrappedComponentName})`;

  return WithTasks;
}
