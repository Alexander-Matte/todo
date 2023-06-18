import { TaskApp } from "./components/TaskApp";
import { Todo } from "./components/Todo";
import { captureTaskInputs, clearContent, getProjectName, getSelectedProject } from "./helpers";
import { renderAllTasks, renderProjLi, renderProject, renderTasks } from "./rendering/renderFuncs";
import { updateContentHeader } from "./helpers";


// //initialize the app
let taskApp = new TaskApp();
updateContentHeader(taskApp.getProject("All"));
document.querySelector("#app-status").addEventListener("click", () => {
    console.log(taskApp)
})
//used for testing displaying all todos
const viewAllTasks = document.querySelector("#viewAllTasks");
viewAllTasks.addEventListener("click", () => {
    clearContent();
    renderAllTasks(taskApp.projects)

});

//Adds project to app. Creates project LI.
const projForm = document.querySelector("#project-input-form");
projForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let projName = getProjectName();
    taskApp.addProject(projName);
    let project = taskApp.getProject(projName);
    renderProjLi(project);
    //Added logic whe project is clicked to display tasks for the project
    let lastLi = document.querySelector(".project-list").lastChild;
    lastLi.addEventListener("click", () => {
        clearContent();
        renderProject(project);
        let selected = getSelectedProject();
        taskApp.currentSelected = taskApp.getProject(selected);
    })
    projForm.reset();
});

//Logic for adding a todo to the project thats selected
let taskForm = document.querySelector("#task-input-form");
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearContent();
    //grabs the current project thats selected
    let currentProject = taskApp.currentSelected;
    //When the form is submitted, I want to capture the values from the form
    let taskInputs = captureTaskInputs();
    //create todo from captured data
    let task = new Todo(taskInputs.title, taskInputs.desc, taskInputs.due, taskInputs.prio)
    //Then I want too add these todos into the correct project which is selected
    currentProject.addTodo(task);
    //Then I want to display the contents of that project with the new added toodoo
    renderTasks(currentProject);


    taskForm.reset();
    
})


//TODO:
// Should I push every task into the project and the "All" project? Will have to look into how it is when deleting out of the project
// Look into making a template for the content page for when a project doest have any todos. And then maybe a template for when a project does have todos
    // For example at the top of the page when a project has todos, maybe display "There are no todos in this project, click here to add a todo!"
// Figure out how the user will enter their todo. z.B Modal? Static form at top of page?
// How to persist data when page is refreshed. Look into how to store locally. Look at TOP instructions













