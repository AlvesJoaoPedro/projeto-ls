document.addEventListener('DOMContentLoaded', () => {
    // Captura o elemento <ul> onde as tarefas deletadas serão exibidas
    let deletedTaskList = document.querySelector('#deleted-tasks-list');
  
    // Obtém as tarefas deletadas do LocalStorage
    let deletedTasks = JSON.parse(localStorage.getItem('deleted-tasks')) || [];
  
    // Adiciona cada tarefa como um <li> à lista
    deletedTasks.forEach(task => {
      let listItem = document.createElement('li');
      listItem.textContent = task; // Define o texto do item
      deletedTaskList.appendChild(listItem); // Adiciona o item à lista
    });
  });
  