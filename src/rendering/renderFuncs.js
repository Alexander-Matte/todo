export function renderProjects(arr) {
    arr.forEach(element => {
        console.log(element.name);
    });
}

export function renderAllTasks(arr) {
    arr.forEach(project => {
        project.tasks.forEach(el => {
            console.log(el);
        })
    });
}



