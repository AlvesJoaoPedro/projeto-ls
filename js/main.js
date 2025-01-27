 //container .notebook
let notebook = document.querySelector('.notebook');
//botão que abre o caderno
let openButton = document.querySelector("#openNotebook");


document.addEventListener('DOMContentLoaded', () => {

  let taskInput = document.querySelector('#task-input');
  let addButton = document.querySelector('#add-button');
  let taskList = document.querySelector('#task-list');

  addButton.addEventListener('click', () => {
    let taskText = taskInput.value.trim();
    if (taskText === '') return; // Evita adicionar tarefas vazias

    // Cria o item da lista
    let listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Cria o botão de exclusão
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    // Anexa o botão e adiciona o item à lista
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    // Limpa o campo de entrada
    taskInput.value = '';
  });
});

 function abrirCaderno()
 {
   alert("Abrindo caderno...");
   // window.location == js object .href == prop
   window.location.href='cadernoaberto.html'
 };

// Função que altera a classe do container .notebook
function toggleClass() {
  if (notebook.classList.contains('notebook-closed')) {
    notebook.classList.remove('notebook-closed');
    notebook.classList.add('notebook-opened');
  } else {
    notebook.classList.remove('notebook-opened');
    notebook.classList.add('notebook-closed');
  }
};

// Captura o botão de abrir o caderno
openButton.addEventListener('click', toggleClass);

