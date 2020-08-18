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
  const taskPriorities = ['!!!', '!!', '!'];

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
    addProject.id = 'addProject';
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
        let newProject = document.getElementById('addProject');
        newProject.disabled = true;
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
        let newProject = document.getElementById('addProject');
        newProject.disabled = false;
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

      let projectContainer = document.createElement('span');
      let projectTitleContainer = document.createElement('span');
      let title = document.createElement('h2');
      let projectButtonsContainer = document.createElement('span');
      let editButton = document.createElement('span');
      let editIcon = document.createElement('span');
      let deleteButton = document.createElement('span');
      let deleteIcon = document.createElement('span');
      let space = document.createElement('hr');
      let description = document.createElement('h4');

      let inputTitle = document.createElement('input');
      let inputDescription = document.createElement('textarea');
      let okButton = document.createElement('span');
      let okIcon = document.createElement('span');

      projectContainer.className = 'projectContainer ' + projectTitle;
      projectTitleContainer.className = 'projectTitleContainer ' + projectTitle;
      title.className = 'projectTitle ' + projectTitle;
      projectButtonsContainer.className =
        'projectButtonsContainer ' + projectTitle;

      description.className = 'projectDescription ' + projectTitle;
      okButton.className = 'projectOkButton ' + projectTitle;
      okButton.title = 'Done';
      okIcon.className = 'fas fa-check-square';
      editButton.className = 'projectEditButton ' + projectTitle;
      editButton.title = 'Edit';
      editIcon.className = 'fas fa-edit';
      deleteButton.className = 'projectDeleteButton ' + projectTitle;
      deleteButton.title = 'Delete';
      deleteIcon.className = 'fas fa-trash-alt';
      inputTitle.className = 'projectTitleInput ' + projectTitle;
      inputDescription.className = 'projectDescriptionInput ' + projectTitle;
      inputTitle.type = 'text';
      inputTitle.placeholder = 'Title';

      if (projectsArr[i].title != 'Title') {
        inputTitle.value = projectsArr[i].getTitle();
      }

      inputTitle.required = true;
      inputDescription.placeholder = 'Description';

      if (projectsArr[i].description != 'Description') {
        inputDescription.value = projectsArr[i].getDescription();
      }

      inputDescription.required = true;
      editButton.appendChild(editIcon);
      deleteButton.appendChild(deleteIcon);
      okButton.appendChild(okIcon);

      title.innerHTML = projectsArr[i].getTitle();
      description.innerHTML = projectsArr[i].getDescription();
      projectButtonsContainer.appendChild(editButton);
      projectButtonsContainer.appendChild(deleteButton);
      projectButtonsContainer.appendChild(okButton);
      projectTitleContainer.appendChild(title);
      projectTitleContainer.appendChild(inputTitle);
      projectTitleContainer.appendChild(projectButtonsContainer);
      projectContainer.appendChild(projectTitleContainer);
      projectContainer.appendChild(space);
      projectContainer.appendChild(description);
      projectContainer.appendChild(inputDescription);

      setClickEvent(projectContainer, editButton, deleteButton, okButton);

      projectsContent.appendChild(projectContainer);

      if (
        projectsArr[i].getTitle() == 'Title' &&
        projectsArr[i].getDescription() == 'Description'
      ) {
        editButton.click();
      }
    }
  };

  const renderEditProject = (project) => {
    project.className += ' edit';
  };

  const getInputValues = (index, project) => {
    let title = project.children[0].children[1].value;
    let description = project.children[3].value;
    if (title === '' && description === '') {
      alert('Enter title and description');
    } else {
      Index.updateProject(index, title, description);
    }
  };

  const setTaskClickEvents = (edit, del, ok, projectId) => {
    edit.addEventListener(
      'click',
      function (e) {
        let newTask = document.getElementById('addTask');
        newTask.disabled = true;
        Index.editTask(e.target.parentNode.parentNode.parentNode);
      },
      false
    );
    del.addEventListener(
      'click',
      function (e) {
        Index.deleteTask(projectId, e.target.className);
      },
      false
    );
    ok.addEventListener(
      'click',
      function (e) {
        let newTask = document.getElementById('addTask');
        newTask.disabled = false;
        getTaskFromValues(
          projectId,
          e.target.className,
          e.target.parentNode.parentNode.parentNode
        );
      },
      false
    );
  };

  const renderTasksHeader = (index) => {
    let addTask = document.createElement('button');
    addTask.innerHTML = 'ADD TASK';
    addTask.className = 'button ' + index;
    addTask.id = 'addTask';
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
      let project = Index.projects[index];
      let tasksArr = project.getTasks();
      renderTasksHeader(index);
      for (let i = 0; i < tasksArr.length; i++) {
        let currentTaskTitle = tasksArr[i].title + i;

        let taskDiv = document.createElement('div');
        let taskTitleContainer = document.createElement('span');
        let taskTitle = document.createElement('h2');
        let taskButtonsContainer = document.createElement('span');
        let taskEditButton = document.createElement('span');
        let taskEditIcon = document.createElement('span');
        let deleteButton = document.createElement('span');
        let deleteIcon = document.createElement('span');
        let space = document.createElement('hr');
        let taskDescription = document.createElement('h4');
        let taskDueDate = document.createElement('h4');

        let inputTitle = document.createElement('input');
        let inputDescription = document.createElement('textarea');
        let taskOptionsContainer = document.createElement('div');
        let dueDateLabel = document.createElement('label');
        let inputDueDate = document.createElement('input');
        let priorityLabel = document.createElement('label');
        let inputPriority = document.createElement('select');
        let inputNotes = document.createElement('textarea');
        let okButton = document.createElement('span');
        let okIcon = document.createElement('span');

        taskDiv.className =
          'taskContainer ' + currentTaskTitle + ' ' + tasksArr[i].priority;

        let taskPriority = tasksArr[i].priority;
        switch (taskPriority) {
          case '!!!':
            taskDiv.className += ' high';
            break;
          case '!!':
            taskDiv.className += ' medium';
            break;
          case '!':
            taskDiv.className += ' low';
            break;
        }

        taskTitleContainer.className = 'taskTitleContainer ' + currentTaskTitle;
        taskTitle.className = 'taskTitle ' + currentTaskTitle;
        taskButtonsContainer.className =
          'taskButtonsContainer ' + currentTaskTitle;
        taskEditButton.className = 'taskEditButton ' + currentTaskTitle;
        taskEditButton.title = 'Edit';
        taskEditIcon.className = 'fas fa-edit';
        deleteButton.className = 'taskDeleteButton ' + currentTaskTitle;
        deleteButton.title = 'Delete';
        deleteIcon.className = 'fas fa-trash-alt';

        taskDescription.className = 'taskDescription ' + currentTaskTitle;
        taskDueDate.className = 'taskDueDate ' + currentTaskTitle;

        inputTitle.className = 'taskTitleInput ' + currentTaskTitle;
        inputTitle.type = 'text';
        inputTitle.placeholder = 'Title';
        inputTitle.required = true;
        inputDescription.className = 'taskDescriptionInput ' + currentTaskTitle;
        inputDescription.placeholder = 'Description';
        inputDescription.required = true;
        taskOptionsContainer.className =
          'taskOptionContainer ' + currentTaskTitle;
        dueDateLabel.className = 'taskDueDateLabel ' + currentTaskTitle;
        dueDateLabel.for = 'dueDate';
        inputDueDate.className = 'taskDueDateInput ' + currentTaskTitle;
        inputDueDate.name = 'dueDate';
        inputDueDate.type = 'date';
        inputDueDate.required = true;
        priorityLabel.className = 'taskPriorityLabel ' + currentTaskTitle;
        priorityLabel.for = 'priority';
        inputPriority.className = 'taskPriorityInput ' + currentTaskTitle;
        inputPriority.name = 'priority';
        inputPriority.required = true;
        inputNotes.className = 'taskNotesInput ' + currentTaskTitle;
        inputNotes.placeholder = 'Notes';
        okButton.className = 'taskOkButton ' + currentTaskTitle;
        okButton.title = 'Done';
        okIcon.className = 'fas fa-check-square';

        taskTitle.innerHTML = tasksArr[i].title;
        taskDescription.innerHTML = tasksArr[i].description;
        taskDueDate.innerHTML = tasksArr[i].dueDate;

        dueDateLabel.innerHTML = 'Due Date : ';
        priorityLabel.innerHTML = 'Priority : ';

        if (tasksArr[i].title != 'Title') {
          inputTitle.value = tasksArr[i].title;
        }
        if (tasksArr[i].description != 'Description') {
          inputDescription.value = tasksArr[i].description;
        }
        if (tasksArr[i].dueDate != 'Date') {
          inputDueDate.value = tasksArr[i].dueDate;
        }
        if (tasksArr[i].notes != 'No Notes') {
          inputNotes.value = tasksArr[i].notes;
        }

        taskEditButton.appendChild(taskEditIcon);
        deleteButton.appendChild(deleteIcon);
        okButton.appendChild(okIcon);

        taskButtonsContainer.appendChild(taskEditButton);
        taskButtonsContainer.appendChild(deleteButton);
        taskButtonsContainer.appendChild(okButton);
        taskTitleContainer.appendChild(taskTitle);
        taskTitleContainer.appendChild(inputTitle);
        taskTitleContainer.appendChild(taskButtonsContainer);
        taskDiv.appendChild(taskTitleContainer);
        taskDiv.appendChild(space);
        taskDiv.appendChild(taskDescription);
        taskDiv.appendChild(inputDescription);
        taskDiv.appendChild(taskDueDate);
        taskOptionsContainer.appendChild(dueDateLabel);
        taskOptionsContainer.appendChild(inputDueDate);
        taskOptionsContainer.appendChild(priorityLabel);

        for (let j = 0; j < taskPriorities.length; j++) {
          let taskPriorityOption = document.createElement('option');
          taskPriorityOption.className =
            'taskPriorityOption ' + currentTaskTitle;
          taskPriorityOption.value = taskPriorities[j];
          taskPriorityOption.innerHTML = taskPriorities[j];
          if (taskPriorities[j] == tasksArr[i].priority) {
            taskPriorityOption.selected = 'selected';
          }
          inputPriority.appendChild(taskPriorityOption);
        }
        taskOptionsContainer.appendChild(inputPriority);
        taskDiv.appendChild(taskOptionsContainer);

        if (tasksArr[i].notes != 'No Notes') {
          let notes = document.createElement('span');
          notes.className = 'taskNotes ' + currentTaskTitle;
          taskDiv.appendChild(notes);
        }
        taskDiv.appendChild(inputNotes);

        setTaskClickEvents(taskEditButton, deleteButton, okButton, index);
        tasksContent.appendChild(taskDiv);

        if (
          tasksArr[i].title == 'Title' &&
          tasksArr[i].description == 'Description' &&
          tasksArr[i].dueDate == 'Date'
        ) {
          taskEditButton.click();
        }
      }
    }
  };

  const renderEditTask = (taskDiv) => {
    taskDiv.className += ' editTask';
  };

  const getTaskFromValues = (projectId, taskId, taskDiv) => {
    let title = taskDiv.children[0].children[1].value;
    let description = taskDiv.children[3].value;
    let date = taskDiv.children[5].children[1].value;
    let priority = taskDiv.children[5].children[3].value;
    let notes = taskDiv.children[6].value;
    if (title === '' || description === '' || date === '' || priority === '') {
      alert('Enter all required values');
    } else {
      Index.updateTask(
        projectId,
        taskId,
        title,
        description,
        date,
        priority,
        notes
      );
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

  return {
    start,
    projectRendering,
    renderTasksinProject,
    renderEditProject,
    renderEditTask,
  };
})();

export { Page };
