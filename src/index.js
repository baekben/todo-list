import { Page } from './page';
import { Project } from './project';
const Index = (() => {
  const render = () => {
    Page.start();
    let projects = [];
    let testProject = Project();
    testProject.setTitle('test title');
    testProject.setDescription('testing');
    console.log(testProject.getDescription());
    projects.push(testProject);
    Page.projectRendering(projects);
  };
  return { render };
})();

Index.render();
