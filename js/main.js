//container .notebook
let notebook = document.querySelector('.notebook');
//botão que abre o caderno
let openButton = document.querySelector("#openNotebook");

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

// Função para criar e exibir um item da lista
function createTaskElement(taskText) {
  let taskList = document.querySelector('#task-list'); //<UL>
  let listItem = document.createElement('li');//<li>
  listItem.textContent = taskText;

  // Botão de exclusão
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(listItem);
    removeTaskFromLocalStorage(taskText); // Remove do LocalStorage
  });

  listItem.appendChild(deleteButton);
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

