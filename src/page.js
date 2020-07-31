import './style/style.css';
import { Index } from './index.js';

const Page = (() => {
  const body = document.body;
  const content = document.createElement('div');
  const main = document.createElement('main');
  const projectsHeader = document.createElement('div');
  const projectsContent = document.createElement('div');
  const projects = document.createElement('div');
  const tasks = document.createElement('div');
  const footer = document.createElement('footer');

  const loadPage = () => {
    projects.appendChild(projectsHeader);
    projects.appendChild(projectsContent);
    main.appendChild(projects);
    main.appendChild(tasks);
    content.appendChild(main);
    content.appendChild(footer);
    body.appendChild(content);
    renderProjectsHeader();
  };

  const setNewProjectButton = (button) => {
    button.addEventListener('click', Index.createNewProject, false);
  };

  const renderProjectsHeader = () => {
    let addProject = document.createElement('button');
    addProject.innerHTML = 'ADD PROJECT';
    addProject.className = 'button';
    addProject.id = 'addProjectButton';
    setNewProjectButton(addProject);
    if (projectsHeader.appendChild(addProject)) {
      return true;
    }
  };

  const clearProjectsContent = () => {
    projectsContent = '';
  };

  const projectRendering = (projectsArr) => {
    clearProjectsContent();
    for (let i = 0; i < projectsArr.length; i++) {
      let projectContainer = document.createElement('span');
      projectContainer.className = 'projectContainer';
      let title = document.createElement('h2');
      title.className = 'projectTitle';
      let description = document.createElement('h4');
      description.className = 'projectDescription';
      title.innerHTML = projectsArr[i].getTitle();
      description.innerHTML = projectsArr[i].getDescription();
      projectContainer.appendChild(title);
      projectContainer.appendChild(description);
      projectsContent.appendChild(projectContainer);
    }
  };

  const setStyle = () => {
    body.id = 'site-body';
    content.id = 'content';
    main.id = 'site-main';
    projectsHeader.id = 'projectsHeader';
    projectsContent.id = 'projectsContent';
    projects.id = 'projects';
    tasks.id = 'tasks';
    footer.id = 'site-footer';
  };

  const start = () => {
    loadPage();
    setStyle();
  };

  return { start, projectRendering };
})();

export { Page };
