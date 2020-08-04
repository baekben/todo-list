//for single task

const Task = () => {
  var title = 'Title';
  var description = 'Description';
  var dueDate = 'Due Date';
  var priority = '';
  var notes = [''];
  const priorities = ['!!!', '!!', '!'];

  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const setPriority = (newPriority) => {
    priority = newPriority;
  };
  const addNote = (newNote) => {
    notes.push(newNote);
  };
  const deleteNote = (index) => {
    notes.splice(index, 1);
  };

  const getTitle = () => {
    title;
  };

  const getDescription = () => {
    description;
  };
  const getDueDate = () => {
    dueDate;
  };
  const getPriority = () => {
    priority;
  };
  const getNotes = () => {
    notes;
  };
  const getPriorities = () => {
    priorities;
  };

  return {
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    addNote,
    deleteNote,
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getNotes,
    getPriorities,
  };
};

export { Task };
