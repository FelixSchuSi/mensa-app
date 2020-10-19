let tasks = [
  { title: 'TypeScript lernen', status: 'done' },
  { title: 'Web Components lernen', status: 'open' }
];

let taskListElement = document.querySelector('.tasks')!;

for (let i = 0; i < tasks.length; i++) {
  let task = tasks[i];
  let taskElement = document.createElement('li');
  taskElement.setAttribute('class', 'task');
  taskElement.innerHTML = `
    <span class="toggle-task">
      <span class="status" style="display: ${task.status === 'open' ? 'none' : 'inherit'}"></span>
    </span>
    <span class="title">${task.title}</span>
  `;
  taskListElement.appendChild(taskElement);
}
