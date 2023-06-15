export function renderProjects(arr) {
    arr.forEach(project => {
        console.log(project.name);
    });
}

export function renderAllTasks(arr) {
    arr.forEach(project => {
        project.tasks.forEach(el => {
            console.log(el);
        })
    });
}

export function renderNewProject(name) {
    let ul = document.querySelector(".project-list");
    let li = document.createElement("li");
    li.classList.add("proj-li");
    li.innerText = name;
    ul.appendChild(li);
}

export function renderProjTasks(projObj) {
    let taskArr = projObj.tasks;
    if (!taskArr.length){
        console.log("NO TASKS IN THIS PROJECT")
    } else {
        taskArr.forEach(task => {
            console.log(task);
        })
    }
}

