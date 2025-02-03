document.addEventListener('DOMContentLoaded', () => {
  let completedTaskList = document.querySelector('#completed-tasks-list');

  let allTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  let completedTasks = allTasks.filter(task => task.status === "completed");

  if (completedTasks.length === 0) {
      let emptyMessage = document.createElement('li');
      emptyMessage.textContent = "Nenhuma tarefa foi concluída ainda.";
      completedTaskList.appendChild(emptyMessage);
      return;
  }

  completedTasks.forEach(task => {
      let listItem = document.createElement('li');
      listItem.textContent = task.nome;
      completedTaskList.appendChild(listItem);
  });
});
