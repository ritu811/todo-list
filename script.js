const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click', () => editTask(li, taskSpan));
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(li));

    li.appendChild(taskSpan);
    li.appendChild(editBtn); // Add Edit button first
    li.appendChild(deleteBtn); // Add Delete button after Edit button
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}

function editTask(taskItem, taskSpan) {
  const newText = prompt('Edit the task:', taskSpan.textContent);
  if (newText !== null) {
    const editedText = newText.trim();
    if (editedText !== '') {
      taskSpan.textContent = editedText;
    }
  }
}
