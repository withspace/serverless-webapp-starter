export const TaskStatus = {
  TODO: 'TODO',
  DOING: 'DOING',
  DONE: 'DONE',
};

export class Task {

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
}

let idBase = 0;

Task.create = (name) => {
  idBase += 1;
  return new Task(`${new Date().toISOString()}-${idBase}`, name, TaskStatus.TODO);
};
