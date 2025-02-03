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

function saveTaskToLocalStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Verifica se já existe uma tarefa com esse nome
  let exists = tasks.some(task => typeof task === "object" && task.nome === taskText);
  if (!exists) {
      tasks.push({ nome: taskText, status: "active" });
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}


function saveDeletedTaskToLocalStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks = tasks.map(task =>
      task.nome === taskText ? { ...task, status: "deleted" } : task
  );

  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function saveCompletedTaskToLocalStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks = tasks.map(task =>
      task.nome === taskText ? { ...task, status: "completed" } : task
  );

  localStorage.setItem("tasks", JSON.stringify(tasks));
}


// Função para carregar tarefas do LocalStorage
function loadTasksFromLocalStorage() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  let activeTasks = tasks.filter(task => task.status === "active");
  let completedTasks = tasks.filter(task => task.status === "completed");
  let deletedTasks = tasks.filter(task => task.status === "deleted")

  console.log("Ativas: ", activeTasks);
  console.log("Concluídas: ", completedTasks);
  console.log("Removidas: ", deletedTasks);
}

function removeTaskFromLocalStorage(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task.nome !== taskToRemove);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para criar e exibir um item da lista
function createTaskElement(taskText) {
  let taskList = document.querySelector('#task-list');
  let listItem = document.createElement('li');
  listItem.textContent = taskText;

  let buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', () => {
      listItem.classList.add('deleted-tasks');
      taskList.removeChild(listItem);
      saveDeletedTaskToLocalStorage(taskText); // Atualiza status para "removida"
  });

  let completeButton = document.createElement('button');
  completeButton.textContent = '✓';
  completeButton.classList.add('complete-btn');
  completeButton.addEventListener('click', () => {
      listItem.classList.add('completed-tasks');
      taskList.removeChild(listItem);
      saveCompletedTaskToLocalStorage(taskText); // Atualiza status para "concluída"
  });

  buttonContainer.appendChild(deleteButton);
  buttonContainer.appendChild(completeButton);
  listItem.appendChild(buttonContainer);
  taskList.appendChild(listItem);

  saveTaskToLocalStorage(taskText); // Salva no localStorage como "ativa"
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

function goToNextPage()
{
  window.location.href = 'completedtasks.html';
}

console.log(JSON.parse(localStorage.getItem('tasks')));