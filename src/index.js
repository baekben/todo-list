import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { Page } from './page';
import { Project } from './project';
import { Task } from './task';

const Index = (() => {
  var projects = [];

  const saveToStorage = () => {
    localStorage.setItem(
      'projectsArr',
      JSON.stringify(Index.projects, null, 4)
    );
    getFromStorage();
  };

  const getFromStorage = () => {
    let storage = false;
    clearProjects();

    let projectsLocalStorage = localStorage.getItem('projectsArr');
    let projectsFromLocalStorage = JSON.parse(projectsLocalStorage);

    if (projectsFromLocalStorage != null) {
      for (let i = 0; i < projectsFromLocalStorage.length; i++) {
        storage = true;
        let project = new Project();
        project.setTitle(projectsFromLocalStorage[i].title);
        project.setDescription(projectsFromLocalStorage[i].description);
        project.setTasks(projectsFromLocalStorage[i].tasks);
        addProject(project);
      }
    }
    return storage;
  };

  const defaultProject = () => {
    let defaultProject = new Project('Default', 'Project Description');
    addProject(defaultProject);
    saveToStorage();
  };

  const clearProjects = () => {
    for (let i = Index.projects.length; i > 0; i--) {
      Index.projects.pop();
    }
  };

  const addProject = (project) => {
    Index.projects.push(project);
  };

  const removeProject = (index) => {
    Index.projects.splice(index, 1);
    saveToStorage();
  };

  const createNewProject = () => {
    let newProject = new Project();
    addProject(newProject);
    Page.projectRendering(projects);
  };

  const createNewTask = (i) => {
    let task = new Task();
    task.setProjectId(i);
    projects[i].addTask(task);
    Page.renderTasksinProject(i);
  };

  const editProject = (project) => {
    Page.renderEditProject(project);
  };

  const updateProject = (index, title, description) => {
    let id = getProjectIndex(index);
    projects[id].setTitle(title);
    projects[id].setDescription(description);
    saveToStorage();
    Page.projectRendering(projects);
  };

  const getProjectIndex = (projectClass) => {
    let id = '';
    for (let i = 0; i < projectClass.length; i++) {
      if (projectClass[i] == ' ') {
        for (let j = i; j < projectClass.length; j++) {
          id += projectClass[j];
        }
        break;
      }
    }

    return id[id.length - 1];
  };

  const getTasksFromProjects = (projectClass) => {
    let id = getProjectIndex(projectClass);
    Page.renderTasksinProject(id);
  };

  const deleteProject = (project) => {
    let id = getProjectIndex(project);
    removeProject(id);
    Page.projectRendering(projects);
    Page.renderTasksinProject(null);
  };

  const editTask = (taskDiv) => {
    Page.renderEditTask(taskDiv);
  };

  const updateTask = (
    projectId,
    button,
    title,
    description,
    dueDate,
    priority,
    notes
  ) => {
    let taskId = getProjectIndex(button);
    projects[projectId].updateTask(
      taskId,
      title,
      description,
      dueDate,
      priority,
      notes
    );
    saveToStorage();
    Page.renderTasksinProject(projectId);
  };

  const deleteTask = (projectId, buttonClass) => {
    let taskId = getProjectIndex(buttonClass);
    projects[projectId].removeTask(taskId);
    saveToStorage();
    Page.renderTasksinProject(projectId);
  };

  const render = () => {
    if (!getFromStorage() && Index.projects.length == 0) {
      defaultProject();
    }
    Page.start();
    Page.projectRendering(projects);
  };

  return {
    render,
    createNewProject,
    getTasksFromProjects,
    projects,
    createNewTask,
    deleteProject,
    editProject,
    updateProject,
    editTask,
    updateTask,
    deleteTask,
  };
})();
export { Index };

Index.render();
