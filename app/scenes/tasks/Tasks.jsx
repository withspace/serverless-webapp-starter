import React from 'react';
import {Button} from 'react-toolbox/lib/button';
import {Input} from 'react-toolbox/lib/input';
import styles from './tasks.css';

const TaskStatus = {
  TODO: 'TODO',
  DOING: 'DOING',
  DONE: 'DONE',
};

class Task {

  constructor(id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
  }

  get isTodo() {
    return this.status === TaskStatus.TODO;
  }

  todo() {
    return new Task(this.id, this.name, TaskStatus.TODO);
  }

  get isDoing() {
    return this.status === TaskStatus.DOING;
  }

  doing() {
    return new Task(this.id, this.name, TaskStatus.DOING);
  }

  get isDone() {
    return this.status === TaskStatus.DONE;
  }

  done() {
    return new Task(this.id, this.name, TaskStatus.DONE);
  }

  withName(name) {
    return new Task(this.id, name, this.status);
  }

  save() {
    console.log('Saving', this);
  }
}

let idBase = 0;

Task.create = (name) => {
  idBase = idBase + 1;
  return new Task(`${new Date().toISOString()}-${idBase}`, name, TaskStatus.TODO);
};

const defaultList = [
  Task.create('Podlać kwiatki').done(),
  Task.create('Pozmywać naczynia').done(),
  Task.create('Nakarmić koty').doing(),
  Task.create('Zrobić pranie'),
  Task.create('Umówić się do lekarza'),
  Task.create('Kupić bilet na koncert'),
  Task.create('Posprzątać łazienkę'),
];

const taskStyles = {
  todo: {
    backgroundColor: '#eee',
  },
  doing: {
    backgroundColor: '#fd0',
  },
  done: {
    backgroundColor: '#bd5',
  },
};

class TaskView extends React.Component {

  state = {
    tempName: this.props.task.name,
  };

  updateTempName = (tempName) => this.setState({tempName});

  render() {

    const task = this.props.task;
    const tempName = this.state.tempName;
    let taskButton = null;

    if (task.isDone)
      taskButton = (
        <Button
          label='Done'
          style={taskStyles.done}
          raised
          onClick={() => task.todo().save()}
        />
      );

    else if (task.isDoing)
      taskButton = (
        <Button
          label='To do'
          style={taskStyles.doing}
          raised
          onClick={() => task.done().save()}
        />
      );

    else
      taskButton = (
        <Button
          label='Doing'
          style={taskStyles.todo}
          raised
          onClick={() => task.doing().save()}
        />
      );

    return (
      <div className={styles.task}>
        <div className={styles.taskButton}>
          {taskButton}
        </div>
        <div className={styles.taskInput}>
          <Input
            type='text'
            hint='Task name'
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

export default function Tasks() {
  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {defaultList.map(task => <TaskView key={task.id} task={task}/>)}
      </div>
    </div>
  );
}
