import { createTaskTemplate } from "../tpl/taskTemplate";

export function renderProjects(arr) {
    arr.forEach(project => {
        console.log(project.name);
    });
}

export function renderAllTasks(projectsArr) {
    projectsArr.forEach(project => {
        renderTasks(project);
    });
}

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
    li.addEventListener("click", () => {
        renderProject(project)
    })
    ul.appendChild(li);
}

export function renderProject (project) {
    renderContentHeader(project);
    renderTasks(project);
    // let taskArr = project.tasks;
    // if (!taskArr.length){
    //     console.log("NO TASKS IN THIS PROJECT")
    // } else {
    //     taskArr.forEach(task => {
    //         console.log(task);
    //     })
    // }
}

function renderContentHeader (project) {
    document.querySelector(".content-header").innerText = project.name;
}

