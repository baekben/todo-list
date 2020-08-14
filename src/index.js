import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { Page } from './page';
import { Project } from './project';
import { Task } from './task';

const Index = (() => {
  var projects = [];

  const defaultProject = () => {
    let defaultProject = Project();
    defaultProject.setTitle('Default');
    defaultProject.setDescription('Project Description');
    addProject(defaultProject);
  };

  const addProject = (project) => {
    projects.push(project);
  };

  const removeProject = (index) => {
    projects.splice(index, 1);
  };

  const getProjects = () => projects;

  const createNewProject = () => {
    let newProject = Project();
    addProject(newProject);
    Page.projectRendering(projects);
  };

  const createNewTask = (i) => {
    let task = Task();
    task.setProjectId(i);
    projects[i].addTask(task);
    Page.renderTasksinProject(i);
  };

  const editProject = (project) => {
    Page.renderEdit(project);
  };

  const updateProject = (index, title, description) => {
    let id = getProjectIndex(index);
    projects[id].setTitle(title);
    projects[id].setDescription(description);
    Page.projectRendering(projects);
  };

  const getProjectIndex = (projectClass) => {
    let id = '';
    for (let i = 0; i < projectClass.length; i++) {
      if (projectClass[i] == '-') {
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
    Page.renderTaskEdit(taskDiv);
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
    Page.renderTasksinProject(projectId);
  };

  const deleteTask = (projectId, buttonClass) => {
    let taskId = getProjectIndex(buttonClass);
    projects[projectId].removeTask(taskId);
    Page.renderTasksinProject(projectId);
  };

  const render = () => {
    defaultProject();
    Page.start();
    Page.projectRendering(projects);
  };

  return {
    render,
    createNewProject,
    getTasksFromProjects,
    getProjects,
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
