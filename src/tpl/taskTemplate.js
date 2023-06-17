export function createTaskTemplate (task) {
    let taskContent = `
<div class="task-title">${task.title}</div>
<div class="task-due">${task.dueDate}</div>
<div class="task-prio">${task.prio}</div>
<div class="btn-group">
<button class="edit">edit</button>
<button class="remove">remove</button>
</div>
`
    return taskContent;

}
