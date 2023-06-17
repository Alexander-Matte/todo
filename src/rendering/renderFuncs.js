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
    renderContentHeader(project)
    let taskArr = project.tasks;
    if (!taskArr.length){
        console.log("NO TASKS IN THIS PROJECT")
    } else {
        taskArr.forEach(task => {
            console.log(task);
        })
    }
}

function renderContentHeader (project) {
    document.querySelector(".content-header").innerText = project.name;
}

