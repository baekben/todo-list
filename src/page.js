import './style/style.css';
import { Index } from './index.js';

const Page = (() => {
  const body = document.body;
  const content = document.createElement('div');
  const main = document.createElement('main');
  const projectsHeader = document.createElement('div');
  const projectsContent = document.createElement('div');
  const projects = document.createElement('div');
  const tasksHeader = document.createElement('div');
  const tasksContent = document.createElement('div');
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

  const setNewTaskButton = (button, index) => {
    button.addEventListener(
      'click',
      function () {
        Index.createNewTask(index);
      },
      false
    );
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

  const clearContent = (contentToClear) => {
    while (contentToClear.firstChild) {
      contentToClear.removeChild(contentToClear.firstChild);
    }
  };

  const setClickEvent = (span) => {
    span.addEventListener(
      'click',
      function (e) {
        Index.getProjectTasks(e.target.className);
      },
      false
    );
  };

  const projectRendering = (projectsArr) => {
    clearContent(projectsContent);
    for (let i = 0; i < projectsArr.length; i++) {
      let projectContainer = document.createElement('span');
      projectContainer.className =
        'projectContainer-' + projectsArr[i].getTitle() + i;
      let title = document.createElement('h2');
      title.className = 'projectTitle-' + projectsArr[i].getTitle() + i;
      let description = document.createElement('h4');
      description.className =
        'projectDescription-' + projectsArr[i].getTitle() + i;
      title.innerHTML = projectsArr[i].getTitle();
      description.innerHTML = projectsArr[i].getDescription();
      projectContainer.appendChild(title);
      projectContainer.appendChild(description);
      setClickEvent(projectContainer);
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
    tasksHeader.id = 'tasksHeader';
    tasksContent.id = 'tasksContent';
    tasks.id = 'tasks';
    footer.id = 'site-footer';
  };
  const renderTasksHeader = (index) => {
    let addTask = document.createElement('button');
    addTask.innerHTML('NEW TASK');
    addTask.className('button');
    addTask.id = 'newTask-' + Index.getProjectTasks()[index].getTitle();
    setNewTaskButton(addTask, index);
    if (tasksContent.appendChild(addTask)) {
      return true;
    }
  };

  const renderTasksinProject = (index) => {
    let project = Index.getProject()[index];
    let tasksArr = project.getTasks();
    clearContent(tasks);
    clearContent(tasksHeader);
    tasks.appendChild(tasksHeader);
    tasks.appendChild(tasksContent);
    clearContent(tasksContent);
    renderTasksHeader(index);
    for (let i = 0; i < tasksArr.length; i++) {
      let currentTitle = tasksArr[i].getTitle();
      let taskDiv = document.createElement('div');
      taskDiv.className = 'taskContainer-' + currentTitle + i;
      let taskTitle = document.createElement('h2');
      taskTitle.className = 'taskTitle-' + currentTitle + i;
      let space = document.createElement('hr');
      let taskDescription = document.createElement('h4');
      taskDescription.className = 'taskDescription-' + currentTitle + i;
      let taskDueDate = docuement.createElement('h4');
      taskDueDate.className = 'taskDueDate-' + currentTitle + i;

      taskTitle.innerHTML = currentTitle;
      taskDescription.innerHTML = tasksArr[i].getDescription();
      taskDueDate.innerHTML = tasksArr[i].getDueDate();
      taskDiv.appendChild(taskTitle);
      taskDiv.appendChild(taskDescription);
      taskDiv.appendChild(taskDueDate);
      if (tasksArr[i].getNotes().length > 0) {
        let notes = document.createElement('span');
        notes.className = 'taskNotes-' + currentTitle + i;
        for (let j = 0; i < tasksArr[i].getNotes().length; j++) {
          let note = document.createElement('p');
          note.className = 'taskNote-' + currentTitle + i;
          notes.appendChild(note);
        }
        taskDiv.appendChild(notes);
      }
      tasksContent.appendChild(taskDiv);
    }
  };

  const start = () => {
    loadPage();
    setStyle();
  };

  return { start, projectRendering, renderTasksinProject };
})();

export { Page };