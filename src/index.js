import { Page } from './page';
import { Project } from './project';
import { Task } from './task';

const Index = (() => {
  var projects = [];

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
    console.log('createNewTask i: ' + i);

    let task = Task();
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
    console.log(id);
    removeProject(id);
    Page.projectRendering(projects);
    Page.renderTasksinProject(null);
  };
  const render = () => {
    Page.start();
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
  };
})();
export { Index };

Index.render();
