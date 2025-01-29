document.addEventListener('DOMContentLoaded', () => {
    // Captura o elemento <ul> onde as tarefas concluídas serão exibidas
    const completedTaskList = document.querySelector('#completed-tasks-list');
  
    // Obtém as tarefas concluídas do LocalStorage
    const completedTasks = JSON.parse(localStorage.getItem('completed-tasks')) || [];
  
    // Adiciona cada tarefa como um <li> à lista
    completedTasks.forEach(task => {
      const listItem = document.createElement('li');
      listItem.textContent = task; // Define o texto do item
      completedTaskList.appendChild(listItem); // Adiciona o item à lista
    });
  });