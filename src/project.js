//for single project

class Project {
  constructor(title, description, tasks) {
    this.title = title ? title : 'Title';
    this.description = description ? description : 'Description';
    this.tasks = tasks ? tasks : [];
  }

  setTitle = (newTitle) => (this.title = newTitle);
  setDescription = (newDescription) => (this.description = newDescription);
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getTasks() {
    return this.tasks;
  }

  addTask = (task) => {
    this.tasks.push(task);
  };

  updateTask = (index, title, description, dueDate, priority, notes) => {
    this.tasks[index].setTitle(title);
    this.tasks[index].setDescription(description);
    this.tasks[index].setDueDate(dueDate);
    this.tasks[index].setPriority(priority);
    this.tasks[index].setNotes(notes);
  };

  deleteTask = (index) => {
    this.tasks.splice(index, 1);
  };
}

export { Project };
