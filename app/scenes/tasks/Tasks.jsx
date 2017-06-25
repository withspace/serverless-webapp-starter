import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import {Input} from 'react-toolbox/lib/input';

class Task {
  constructor(name, status) {
    Task.id = Task.id + 1;
    this.id = Task.id;
    this.name = name;
    if (status && status.todo) {
      this.status = status;
    } else {
      this.status = {
        todo: new Date(),
        doing: null,
        done: null,
      }
    }
  }

  doing() {
    const now = new Date();
    return new Task(this.name, {
      todo: this.status.todo || now,
      doing: now,
      done: null,
    });
  }

  done() {
    const now = new Date();
    return new Task(this.name, {
      todo: this.status.todo || now,
      doing: this.status.doing || now,
      done: now,
    })
  }

  get isWaiting() {
    return !this.status.doing;
  }

  get isDoing() {
    return this.status.doing && !this.status.done;
  }

  get isDone() {
    return !!this.status.done;
  }
}

Task.id = 0;

const defaultList = [
  new Task('Podlać kwiatki').done(),
  new Task('Pozmywać naczynia').done(),
  new Task('Nakarmić koty').doing(),
  new Task('Zrobić pranie'),
  new Task('Umówić się do lekarza'),
  new Task('Kupić bilet na koncert Massive Attack'),
  new Task('Posprzątać łazienkę'),
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
  cardOuter: {
    padding: '0.5em',
  },
  tasksContainer: {
    margin: '-0.5em -1.5em',
  },
};

function TaskView({task}) {
  return (
    <div style={taskStyles.cardOuter}>
      <Card>
        <CardTitle
          title={task.name}
          subtitle="Subtitle here"
        />
        <CardText>aaa</CardText>
        <CardActions>
          <Button
            label='To do'
            style={task.isWaiting && taskStyles.todo || {}}
            raised={task.isWaiting}
          />
          <Button
            label='Doing'
            style={task.isDoing && taskStyles.doing || {}}
            raised={task.isDoing}
          />
          <Button
            label='Done'
            style={task.isDone && taskStyles.done || {}}
            raised={task.isDone}
          />
        </CardActions>
      </Card>
    </div>
  );
}

export default function Tasks() {
  return (
    <div>
      <h1>Tasks</h1>
      <div style={taskStyles.tasksContainer}>
        {defaultList.map(task => <TaskView key={task.id} task={task}/>)}
      </div>
    </div>
  );
}
