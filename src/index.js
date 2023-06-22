import { TaskApp } from "./components/TaskApp";
import { Todo } from "./components/Todo";
import { captureTaskInputs, clearContent, getProjectName } from "./helpers";
import { renderEditInput, renderProjLi, renderTasks } from "./rendering/renderFuncs";
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
    handleRemoveTodo()
    updateContentHeader(defaultProject);

});

//Adds project to app. Creates project Li.
const projForm = document.querySelector("#project-input-form");
projForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let projName = getProjectName();
    taskApp.addProject(projName);
    let project = taskApp.getProject(projName);
    let renderedLi = renderProjLi(project);
    //Find better solution for selecting elements to add listeners too
    let editProjBtn = renderedLi.childNodes[1].firstChild;
    let liProjName = renderedLi.firstChild;
    let projDeletebtn = renderedLi.lastElementChild.lastElementChild;
    liProjName.addEventListener("click", function (e) {
        clearContent();
        taskApp.currentSelected = project;
        updateContentHeader(project)
        renderTasks(project);
        handleRemoveTodo()
    })
    projDeletebtn.addEventListener("click", function (e) {
        clearContent();
        taskApp.removeProject(project);
        renderedLi.remove()
        taskApp.currentSelected = defaultProject;
        updateContentHeader(defaultProject)
        renderTasks(defaultProject)
        handleRemoveTodo()
    })
    editProjBtn.addEventListener("click", function (e) {
        let div = renderedLi.firstElementChild;
        div.setAttribute("contenteditable","true")
        //When edit button is clicked, then add css to content edible field so user knows they can edit it
        // Swap out the edit icon for the save icon. Once content is changed! if its the same, then leave edit icon.
        // If the save button is clicked, then update the projects name and cancel out from the conent editible field.
        div.addEventListener("keypress", function (e) {
            if(e.key === "Enter") {
                project.name = this.textContent;
                taskApp.currentSelected = project;
                updateContentHeader(taskApp.currentSelected);
                this.setAttribute("contenteditable", "false");
            }
        })

        // once save is clicked, switch icon back to edit
        

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
    handleRemoveTodo()
    handleEditTodo();
    taskForm.reset();
    
})


//TODO:
// Build project remove logic --> DONE. Should deleting a project delete all the todos from the "All" project? Look into building
//  modal that you can choose to delete all todos globally or to keep the todos but delete the project
// build remove todo logic --> DONE --> When one deletes a Task from a project, should it also delete it from the "All" Project?
// Build edit todo logic
// Build edit project logig

// Look into making a template for the content page for when a project doest have any todos. And then maybe a template for when a project does have todos
    // For example at the top of the page when a project has todos, maybe display "There are no todos in this project, click here to add a todo!"
// Build a button at top of page that brings a modal to add a todo
// How to persist data when page is refreshed. Look into how to store locally. Look at TOP instructions
// create project validation that every project has a unique name
//
function handleEditTodo (e) {
    let editBtns = document.querySelectorAll(".edit-todo");
    editBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            console.log(this.parentElement.parentElement)
        })

    })

}



function handleRemoveTodo (e) {
    let deleteTodoBtns = document.querySelectorAll(".remove-todo");
    deleteTodoBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            let todoLi = this.parentElement.parentElement;
            let taskName = todoLi.firstElementChild.textContent;
            let currentProject = taskApp.currentSelected;
            currentProject.removeTodo(taskName);
            todoLi.remove();  
        })
    })
}





