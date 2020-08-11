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

  const setClickEvent = (span, edit, del, ok) => {
    span.addEventListener(
      'click',
      function (e) {
        Index.getTasksFromProjects(e.target.className);
      },
      false
    );
    edit.addEventListener(
      'click',
      function (e) {
        Index.editProject(e.target.parentNode.parentNode.parentNode);
      },
      false
    );
    del.addEventListener(
      'click',
      function (e) {
        Index.deleteProject(e.target.className);
      },
      false
    );
    ok.addEventListener(
      'click',
      function (e) {
        getInputValues(
          e.target.className,
          e.target.parentNode.parentNode.parentNode
        );
      },
      false
    );
  };

  const projectRendering = (projectsArr) => {
    clearContent(projectsContent);
    for (let i = 0; i < projectsArr.length; i++) {
      let projectTitle = projectsArr[i].getTitle() + i;

      let inputTitle = document.createElement('input');
      let inputDescription = document.createElement('textarea');
      let okButton = document.createElement('button');

      let projectContainer = document.createElement('span');
      projectContainer.className = 'projectContainer-' + projectTitle;
      let projectTitleContainer = document.createElement('span');
      projectTitleContainer.className = 'projectTitleContainer-' + projectTitle;
      let title = document.createElement('h2');
      title.className = 'projectTitle-' + projectTitle;
      let projectButtonsContainer = document.createElement('span');
      projectButtonsContainer.className =
        'projectButtonsContainer-' + projectTitle;

      let editButton = document.createElement('button');
      editButton.innerHTML = 'Edit';

      let deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'Delete';

      let space = document.createElement('hr');
      let description = document.createElement('h4');
      description.className = 'projectDescription-' + projectTitle;
      okButton.className = 'projectOkButton-' + projectTitle;
      editButton.className = 'projectEditButton-' + projectTitle;
      deleteButton.className = 'projectDeleteButton-' + projectTitle;

      inputTitle.placeholder = 'Title';
      inputTitle.required = true;
      inputDescription.placeholder = 'Description';
      inputDescription.required = true;
      okButton.innerHTML = 'OK';
      inputTitle.className = 'projectTitleInput-' + projectTitle;
      inputDescription.className = 'projectDescriptionInput-' + projectTitle;

      title.innerHTML = projectsArr[i].getTitle();
      description.innerHTML = projectsArr[i].getDescription();
      projectButtonsContainer.appendChild(editButton);
      projectButtonsContainer.appendChild(deleteButton);
      projectButtonsContainer.appendChild(okButton);
      projectTitleContainer.appendChild(title);
      projectTitleContainer.appendChild(inputTitle);
      projectTitleContainer.appendChild(projectButtonsContainer);
      projectContainer.appendChild(projectButtonsContainer);
      projectContainer.appendChild(projectTitleContainer);
      projectContainer.appendChild(space);
      projectContainer.appendChild(description);
      projectContainer.appendChild(inputDescription);
      setClickEvent(projectContainer, editButton, deleteButton, okButton);
      projectsContent.appendChild(projectContainer);
    }
  };

  const renderEdit = (project) => {
    console.log((project.className += ' edit'));
  };

  const getInputValues = (index, project) => {
    let title = project.children[0].children[1].value;
    let description = project.children[3].value;
    if (title == '' && description == '') {
      alert('Enter title and description');
    } else {
      Index.updateProject(index, title, description);
    }
  };

  const renderTasksHeader = (index) => {
    let addTask = document.createElement('button');
    addTask.innerHTML = 'NEW TASK';
    addTask.className = 'button';
    addTask.id = 'newTask-' + Index.getProjects()[index].getTitle();
    setNewTaskButton(addTask, index);
    if (tasksHeader.appendChild(addTask)) {
      return true;
    }
  };

  const renderTasksinProject = (index) => {
    clearContent(tasks);
    clearContent(tasksHeader);
    tasks.appendChild(tasksHeader);
    tasks.appendChild(tasksContent);
    clearContent(tasksContent);
    if (index != null) {
      let project = Index.getProjects()[index];
      let tasksArr = project.getTasks();
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
        let taskDueDate = document.createElement('h4');
        taskDueDate.className = 'taskDueDate-' + currentTitle + i;

        taskTitle.innerHTML = currentTitle;
        taskDescription.innerHTML = tasksArr[i].getDescription();
        taskDueDate.innerHTML = tasksArr[i].getDueDate();
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(space);
        taskDiv.appendChild(taskDescription);
        taskDiv.appendChild(taskDueDate);
        if (tasksArr[i].getNotes().length > 0) {
          let notes = document.createElement('span');
          notes.className = 'taskNotes-' + currentTitle + i;
          for (let j = 0; j < tasksArr[i].getNotes().length; j++) {
            let note = document.createElement('p');
            note.className = 'taskNote-' + currentTitle + i;
            notes.appendChild(note);
          }
          taskDiv.appendChild(notes);
        }
        tasksContent.appendChild(taskDiv);
      }
      console.log('rendered tasks');
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

  const start = () => {
    loadPage();
    setStyle();
  };

  return { start, projectRendering, renderTasksinProject, renderEdit };
})();

export { Page };
