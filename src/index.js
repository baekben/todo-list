import { Page } from './page';
import { Project } from './project';
import { Task } from './task';

const Index = (() => {
  let projects = [];

  const addProject = (project) => {
    projects.push(project);
  };
  const getProjects = () => {
    projects;
  };

  const createNewProject = () => {
    let newProject = Project();
    addProject(newProject);
    Page.projectRendering(projects);
  };

  const createNewTask = (i) => {
    let task = Task();
    projects[i].addTask(task);
    Page.renderTasksinProject(i);
  };

  const getProjectTasks = (projectClass) => {
    let id = '';
    for (let i = 0; i < projectClass.length; i++) {
      if (projectClass[i] == '') {
        for (let j = i; j < projectClass.length; j++) {
          id += projectClass[j];
        }
        break;
      }
      console.log(id);
      Page.renderTasksinProject([id[id.length - 1]]);
    }
  };
  const render = () => {
    Page.start();
  };
  return {
    render,
    createNewProject,
    getProjectTasks,
    getProjects,
    createNewTask,
  };
})();
export { Index };

Index.render();
