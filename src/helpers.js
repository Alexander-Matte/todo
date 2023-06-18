export function getProjectName() {
    let projectName = document.querySelector("#projectName").value;
    return projectName;
}

export function getSelectedProject() {
    return document.querySelector(".content-header").innerHTML;

}

export function clearContent() {
    let contentTasks = document.querySelectorAll(".task-li");
    contentTasks.forEach(task => {
        task.remove();
    })
}

export function captureTaskInputs() {
    let title = document.querySelector("#task-title").value;
    let desc = document.querySelector("#task-desc").value;
    let due = document.querySelector("#task-due").value;
    let prio = document.querySelector("#task-prio").value;
    return {title, desc, due, prio};   
}

export function updateContentHeader (project) {
    document.querySelector(".content-header").innerText = project.name;
}