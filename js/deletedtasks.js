  document.addEventListener('DOMContentLoaded', () => {
    let deletedTaskList = document.querySelector('#deleted-tasks-list');

    // Obtém todas as tarefas do LocalStorage
    let allTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Filtra apenas as tarefas removidas
    let deletedTasks = allTasks.filter(task => task.status === "deleted");

    // Se não houver tarefas removidas, exibe uma mensagem
    if (deletedTasks.length === 0) {
        let emptyMessage = document.createElement('li');
        emptyMessage.textContent = "Nenhuma tarefa removida ainda.";
        deletedTaskList.appendChild(emptyMessage);
        return;
    }

    // Adiciona cada tarefa removida como um <li> à lista
    deletedTasks.forEach(task => {
        let listItem = document.createElement('li');
        listItem.textContent = task.nome;
        deletedTaskList.appendChild(listItem);
    });
});
