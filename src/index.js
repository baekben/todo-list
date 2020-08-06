import { Page } from './page';
import { Project } from './project';
import { Task } from './task';

const Index = (() => {
  var projects = [];

  const addProject = (project) => {
    projects.push(project);
  };

  const getProjects = () => projects;

  const createNewProject = () => {
    let newProject = Project();
    addProject(newProject);
    Page.projectRendering(projects);
  };

  const createNewTask = (i) => {
    console.log('project:' + project[0]);

    let task = Task();
    projects[i].addTask(task);
    Page.renderTasksinProject(i);
  };

  const getTasksFromProjects = (projectClass) => {
    let id = '';
    for (let i = 0; i < projectClass.length; i++) {
      if (projectClass[i] == '-') {
        for (let j = i; j < projectClass.length; j++) {
          id += projectClass[j];
          console.log('id+ ' + id);
        }
        break;
      }
    }
    console.log('id:' + id);

    Page.renderTasksinProject(id[id.length - 1]);
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
  };
})();
export { Index };

Index.render();
