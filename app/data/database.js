import PouchDB from 'pouchdb';
// import { Task } from './Task';

class Database {

  constructor() {
    this.db = new PouchDB('tasks-database');
    this.changeListeners = {};
  }

  addChangeListener(name, listener) {
    this.removeChangeListener(name);

    // https://pouchdb.com/api.html#changes
    this.changeListeners[name] =
      this.db
        .changes({
          since: 'now',
          live: true,
          include_docs: true,
        })
        .on('change', listener)
        .on('error', (err) => console.log(err));
  }

  removeChangeListener(name) {
    if (this.changeListeners[name]) {
      this.changeListeners[name].cancel();
      delete this.changeListeners[name];
    }
  }

  save(task) {
    console.log('Storing', task.asDoc());
    return this.db.put(task.asDoc());
  }

  getAll() {
    const opts = { include_docs: true };
    return this.db.allDocs(opts).then(({ rows }) => rows);
  }
}

const database = new Database();

// const defaultList = [
//   Task.create('Podlać kwiatki').done(),
//   Task.create('Pozmywać naczynia').done(),
//   Task.create('Nakarmić koty').doing(),
//   Task.create('Zrobić pranie'),
//   Task.create('Umówić się do lekarza'),
//   Task.create('Kupić bilet na koncert'),
//   Task.create('Posprzątać łazienkę'),
// ];
//
// defaultList.forEach((task) => database.save(task));

export default database;

