//container .notebook
let notebook = document.querySelector('.notebook');
//botão que abre o caderno
let openButton = document.querySelector("#openNotebook");

//CARREGA AS TAREFAS SALVAS NO LOCALSTORAGE
document.addEventListener('DOMContentLoaded', () => {
  let taskInput = document.querySelector('#task-input');
  let addButton = document.querySelector('#add-button');
  let taskList = document.querySelector('#task-list');

  // Carrega tarefas salvas no LocalStorage ao iniciar
  loadTasksFromLocalStorage();

  // Evento de clique no botão de adicionar tarefa
  addButton.addEventListener('click', () => {
    let taskText = taskInput.value.trim();
    if (taskText === '') return; // Evita adicionar tarefas vazias

    // Cria e exibe o item da lista
    createTaskElement(taskText);

    // Salva a tarefa no LocalStorage
    saveTaskToLocalStorage(taskText);

    // Limpa o campo de entrada
    taskInput.value = '';
  });
});


// Função para salvar tarefas no LocalStorage
function saveTaskToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para carregar tarefas do LocalStorage
function loadTasksFromLocalStorage() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    createTaskElement(task);
  });
}

function saveCompletedTaskToLocalStorage(task) {
  let completedTasks = JSON.parse(localStorage.getItem('completed-tasks')) || [];
  completedTasks.push(task);
  localStorage.setItem('completed-tasks', JSON.stringify(completedTasks));
}

function saveDeletedTaskToLocalStorage(task) {
  let deletedTasks = JSON.parse(localStorage.getItem('deleted-tasks')) || [];
  deletedTasks.push(task);
  localStorage.setItem('deleted-tasks', JSON.stringify(deletedTasks));
}

function loadCompletedTasksFromLocalStorage()
{
  let completedTasks = JSON.parse(localStorage.getItem('completed-tasks')) || [];

}

// Função para criar e exibir um item da lista
function createTaskElement(taskText) {
  let taskList = document.querySelector('#task-list');
  let listItem = document.createElement('li');
  listItem.textContent = taskText;

  // Criação do contêiner para os botões
  let buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  // Botão de exclusão
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(listItem);
    removeTaskFromLocalStorage(taskText);
    saveDeletedTaskToLocalStorage(taskText);
  });

    // Botão de concluir
    let completeButton = document.createElement('button');
    completeButton.textContent = '✓';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click',
      () =>
      {
      listItem.classList.add('completed-tasks');
  
      // Desabilita os botões
      completeButton.disabled = true;
      deleteButton.disabled = true;
  
      // Salva a tarefa como concluída no LocalStorage
      saveCompletedTaskToLocalStorage(taskText);
    });

  // Adiciona os botões ao contêiner
  buttonContainer.appendChild(deleteButton);
  buttonContainer.appendChild(completeButton);

  // Adiciona o contêiner de botões ao item da lista
  listItem.appendChild(buttonContainer);

  // Adiciona o item da lista à lista de tarefas
  taskList.appendChild(listItem);
}


// Função para remover tarefas do LocalStorage
function removeTaskFromLocalStorage(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função que altera a classe do container .notebook
function toggleClass() {
  if (notebook.classList.contains('notebook-closed')) {
    notebook.classList.remove('notebook-closed');
    notebook.classList.add('notebook-opened');
  } else {
    notebook.classList.remove('notebook-opened');
    notebook.classList.add('notebook-closed');
  }
}

// Captura o botão de abrir o caderno
openButton.addEventListener('click', toggleClass);

function abrirCaderno() {
  alert("Abrindo caderno...");
  window.location.href = 'cadernoaberto.html';
}

completedTasks = JSON.parse(localStorage.getItem('completed-tasks')) || []
completeButton.addEventListener('click',
  () =>
  {
    completedTasks.push(taskText);
    listItem.classList.add('completed-tasks');

    // Atualiza o LocalStorage com as tarefas concluídas
    localStorage.setItem('completed-tasks', JSON.stringify(completedTasks))
  })


function goToNextPage()
{
  window.location.href = 'completedtasks.html';
}