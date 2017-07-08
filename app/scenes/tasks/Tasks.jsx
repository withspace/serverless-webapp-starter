import React from 'react';
import { Task } from './Task';
import TaskView from './TaskView';

const defaultList = [
  Task.create('Podlać kwiatki').done(),
  Task.create('Pozmywać naczynia').done(),
  Task.create('Nakarmić koty').doing(),
  Task.create('Zrobić pranie'),
  Task.create('Umówić się do lekarza'),
  Task.create('Kupić bilet na koncert'),
  Task.create('Posprzątać łazienkę'),
];

export default function Tasks() {
  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {defaultList.map((task) => <TaskView key={task.id} task={task} />)}
      </div>
    </div>
  );
}
