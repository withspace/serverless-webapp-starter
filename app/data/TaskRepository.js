import database from './database';
import { Task } from './Task';

export default class TaskRepository {

  database = database;

  getAll() {
    return this.database.getAll().then((rows) => rows.map((row) => Task.fromDoc(row.doc)));
  }

  create(task) {
    return this.database.create(task.asDoc());
  }

  update(task) {
    return this.database.update(task.asDoc());
  }

  remove(task) {
    return this.database.remove(task.asDoc());
  }
}
