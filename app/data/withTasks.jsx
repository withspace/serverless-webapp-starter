import React from 'react';
import database from './database';
import { Task } from './Task';

export default function withTasks(WrappedComponent) {
  class WithTasks extends React.Component {

    state = {
      tasks: [],
    };

    componentDidMount() {
      database.getAll().then((rows) => {
        const tasks = rows.map((row) => Task.fromDoc(row.doc));
        this.setState({ tasks });
      });
      database.addChangeListener(this.listenerName, this.handleChange);
    }

    componentWillUnmount() {
      database.removeChangeListener(this.listenerName);
    }

    handleChange = (row) => {
      console.log('Change', row);
      const newTask = Task.fromDoc(row); // currently we support append-only
      this.setState({ values: this.state.tasks.concat([newTask]) });
    };

    listenerName = `${WithTasks.displayName}-${Math.floor((Math.random() * 9000) + 1000)}`;

    render() {
      return <WrappedComponent tasks={this.state.tasks} {...this.props} />;
    }
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithTasks.displayName = `withTasks(${wrappedComponentName})`;

  return WithTasks;
}
