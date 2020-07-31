//import './style/style.css';
const Page = (() => {
  const body = document.body;
  const content = document.createElement('div');
  const main = document.createElement('main');
  const projects = document.createElement('div');
  const tasks = document.createElement('div');
  const footer = document.createElement('footer');

  const loadPage = () => {
    main.appendChild(projects);
    main.appendChild(tasks);
    content.appendChild(main);
    content.appendChild(footer);
    body.appendChild(content);
  };

  const projectRendering = (projectsArr) => {
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
      projects.appendChild(projectContainer);
    }
  };

  const setStyle = () => {
    body.id = 'site-body';
    content.id = 'content';
    main.id = 'site-main';
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
