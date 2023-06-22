import { createTaskTemplate } from "../tpl/taskTemplate";

export function renderTasks(project) {
    let taskUl = document.querySelector("#task-list")
    let projTasks = project.tasks;
    projTasks.forEach(task => {
        let liContent = createTaskTemplate(task);
        let li = document.createElement("li");
        li.classList.add("task-li");
        li.innerHTML = liContent;
        taskUl.appendChild(li);
    });
}

export function renderProjLi (project) {
    let name = project.name;
    let ul = document.querySelector(".project-list");
    let li = document.createElement("li");
    let div = document.createElement("div");
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-group")
    div.classList.add("proj-name")
    li.classList.add("proj-li");
    div.innerText = name
    btnDiv.appendChild(renderProjEditBtn());
    btnDiv.appendChild(renderProjDeleteBtn());
    li.appendChild(div);
    li.appendChild(btnDiv)
    ul.appendChild(li);
    return li
}

function renderProjDeleteBtn () {
    let btn = document.createElement("button");
    let icon = document.createElement("icon");
    btn.classList.add("btn","btn-danger");
    icon.classList.add("fa-solid", "fa-trash")
    btn.appendChild(icon);
    return btn;

}

function renderProjEditBtn () {
    let btn = document.createElement("button");
    let icon = document.createElement("icon");
    btn.classList.add("btn","btn-dark", "edit-proj", "d-flex");
    icon.classList.add("fa-regular", "fa-pen-to-square")
    btn.appendChild(icon);
    return btn;
}
