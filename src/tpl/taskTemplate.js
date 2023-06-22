export function createTaskTemplate (task) {
    let taskContent = `
<div class="task-title">${task.title}</div>
<div class="task-due">${task.dueDate}</div>
<div class="task-prio">${task.prio}</div>
<div class="btn-group">
<button type="button" class="btn btn-primary edit-todo">Edit</button>
<button class="btn btn-danger remove-todo">remove</button>
</div>
`
    return taskContent;

}
