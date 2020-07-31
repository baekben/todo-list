import { Page } from './page';
import { Project } from './project';
const Index = (() => {
  let projects = [];

  const createNewProject = () => {
    let newProject = Project();
    projects.push(newProject);
    Page.projectRendering(projects);
  };
  const render = () => {
    Page.start();
  };
  return { render, createNewProject };
})();
export { Index };

Index.render();
