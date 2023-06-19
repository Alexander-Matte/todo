import { TaskApp } from "./components/TaskApp";
import { Todo } from "./components/Todo";
import { captureTaskInputs, clearContent, getProjectName, getSelectedProject } from "./helpers";
import { renderProjLi, renderProject, renderTasks } from "./rendering/renderFuncs";
import { updateContentHeader } from "./helpers";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'



// //initialize the app
let taskApp = new TaskApp();
let defaultProject = taskApp.getProject("All")
updateContentHeader(defaultProject);
document.querySelector("#app-status").addEventListener("click", () => {
    console.log(taskApp)
})

//used for testing displaying all todos
const viewAllTasks = document.querySelector("#viewAllTasks");
viewAllTasks.addEventListener("click", () => {
    clearContent();
    taskApp.currentSelected = defaultProject;
    renderTasks(defaultProject);
    updateContentHeader(defaultProject);

});

//Adds project to app. Creates project Li.
const projForm = document.querySelector("#project-input-form");
projForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let projName = getProjectName();
    taskApp.addProject(projName);
    let project = taskApp.getProject(projName);
    let renderedLi = renderProjLi(project);
    renderedLi.addEventListener("click", (e) => {
        clearContent();
        const elementClicked = e.target;
        let projName = elementClicked.textContent
        taskApp.currentSelected = taskApp.getProject(projName);
        updateContentHeader(taskApp.currentSelected)
        renderTasks(taskApp.currentSelected);
    })
    projForm.reset();
});

//Logic for adding a todo to the project thats selected
let taskForm = document.querySelector("#task-input-form");
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearContent();
    let currentProject = taskApp.currentSelected;
    let taskInputs = captureTaskInputs();
    let task = new Todo(taskInputs.title, taskInputs.desc, taskInputs.due, taskInputs.prio)
    if(currentProject === defaultProject) {
        defaultProject.addTodo(task);
    } else {
        currentProject.addTodo(task);
        defaultProject.addTodo(task);
    }
    
    renderTasks(currentProject);
    taskForm.reset();
    
})


//TODO:
// Build project remove logic
// build remove todo logic
// Build edit todo logic
// Build edit project logig

// Look into making a template for the content page for when a project doest have any todos. And then maybe a template for when a project does have todos
    // For example at the top of the page when a project has todos, maybe display "There are no todos in this project, click here to add a todo!"
// Build a button at top of page that brings a modal to add a todo
// How to persist data when page is refreshed. Look into how to store locally. Look at TOP instructions
// create project validation that every project has a unique name
// 













