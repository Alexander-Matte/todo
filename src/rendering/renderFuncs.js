import { updateContentHeader } from "../helpers";
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
    li.classList.add("proj-li");
    li.innerText = name;
    ul.appendChild(li);
}

export function renderProject (project) {
    updateContentHeader(project);
    renderTasks(project);

}
