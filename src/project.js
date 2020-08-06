//for single project

const Project = () => {
  var title = 'Title';
  var description = 'Description';
  var tasks = [];

  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);
  const getTitle = () => title;
  const getDescription = () => description;
  const getTasks = () => tasks;

  const addTask = (task) => {
    tasks.push(task);
  };

  const deleteTask = (index) => {
    tasks.splice(index, 1);
  };

  return {
    setTitle,
    setDescription,
    getTitle,
    getDescription,
    getTasks,
    addTask,
    deleteTask,
  };
};

export { Project };
