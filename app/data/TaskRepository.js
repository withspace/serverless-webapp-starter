import database from './database';
import { Task } from './Task';

function taskFromDoc({ _id, name, status }) {
  return new Task(_id, name, status);
}

function taskToDoc(task) {
  return {
    _id: task.id,
    name: task.name,
    status: task.status,
  };
}

export default class TaskRepository {

  getAll = () =>
    database
      .getAll()
      .then((rows) => rows.map((row) => taskFromDoc(row.doc)));

  create = (task) => database.create(taskToDoc(task));

  update = (task) => database.update(taskToDoc(task));

  remove = (task) => database.remove(taskToDoc(task));
}
