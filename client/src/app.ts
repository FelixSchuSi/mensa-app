let tasks = [
  { title: 'TypeScript lernen', status: 'done' },
  { title: 'Web Components lernen', status: 'open' }
];

let taskListElement = document.querySelector('.tasks')!;
let template: any = document.getElementById('task');

for (let i = 0; i < tasks.length; i++) {
  let task = tasks[i];
  let taskElement = template.content.cloneNode(true);
  taskElement.querySelector('.status').style.display = task.status === 'open' ? 'none' : 'inherit';
  taskElement.querySelector('.title').innerText = task.title;
  taskListElement.appendChild(taskElement);
}
