import { TaskApp } from "./components/TaskApp";
import { Todo } from "./components/Todo";
import { captureTaskInputs, clearContent, getProjectName } from "./helpers";
import { renderProjLi, renderTasks } from "./rendering/renderFuncs";
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
    if(taskApp.projects.some(project => project.name === projName)){
        alert("Object found inside the array.");
        projForm.reset();
        return
    } else{
        taskApp.addProject(projName);
    }
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
        let icon = this.firstElementChild;
        if(icon.classList.contains("fa-pen-to-square")){
            icon.classList.remove("fa-pen-to-square");
            icon.classList.add("fa-floppy-disk");
            this.style.background = "green";
            div.setAttribute("contenteditable","true")
            div.focus();
        } else {
            icon.classList.remove("fa-floppy-disk");
            icon.classList.add("fa-pen-to-square");
            this.style.background = "black";
            div.setAttribute("contenteditable","false");
            div.blur();
        }
        div.addEventListener("blur", function(e) {
            let icon = editProjBtn.firstElementChild;
            let newName = e.target.innerText
            if (taskApp.getProject(newName)) {
                return
            } else {
                project.name = this.textContent;
                taskApp.currentSelected = project;
                updateContentHeader(taskApp.currentSelected);
            }
            icon.classList.remove("fa-floppy-disk");
            icon.classList.add("fa-pen-to-square");
            editProjBtn.style.background = "black";
            div.setAttribute("contenteditable","false")

        })
    })
    projForm.reset();
});

//Logic for adding a todo to the project thats selected
let taskForm = document.querySelector("#task-input-form");
taskForm.addEventListener("submit", function (e) {
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
    captureTaskToEdit(currentProject);
    handleRemoveTodo()
    taskForm.reset();
    
})

let taskToEdit;

let editTaskModal = document.querySelector("#task-edit-form");
editTaskModal.addEventListener("submit", function(e){
    e.preventDefault();
    let currentProject = taskApp.currentSelected;
    let updatedTask = getData(this);
    if(currentProject.tasks.includes(taskToEdit)) {
        let i = currentProject.tasks.indexOf(taskToEdit);
        currentProject.updateTask(i, updatedTask.title, updatedTask.description, updatedTask.dueDate, updatedTask.prio);
    }
    clearContent();
    renderTasks(currentProject);
    captureTaskToEdit(currentProject);
    handleRemoveTodo();

    
    


})

function captureTaskToEdit (currentProject) {
    let editBtns = document.querySelectorAll(".edit-todo");
    editBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            let taskTitle = this.parentElement.parentElement.firstElementChild.textContent;
            let task = currentProject.getTask(taskTitle);
            taskToEdit = task;
            document.querySelector("#edit-task-title").value = task.title;
            document.querySelector("#edit-task-desc").value = task.description;
            document.querySelector("#edit-task-due").value = task.dueDate;
            document.querySelector("#edit-task-prio").value = task.prio;
        });
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

document.querySelector("#modal-add-close").addEventListener("click", (e) => {
    taskForm.reset();
})


//Move this to helpers and use for capturing original inputs TODO!!
function getData(form) {
    let formData = new FormData(form);
    let result = Object.fromEntries(formData);
    let title = result["task-title"];
    let description = result["task-desc"];
    let dueDate = result["task-due"];
    let prio = result["task-prio"];
    return {title, description, dueDate, prio};

    
};


//TODO:


// Look into making a template for the content page for when a project doest have any todos. And then maybe a template for when a project does have todos
    // For example at the top of the page when a project has todos, maybe display "There are no todos in this project, click here to add a todo!"
// How to persist data when page is refreshed. Look into how to store locally. Look at TOP instructions
// create project validation that every project has a unique name and Task!
// When one deletes a Task from a project, should it also delete it from the "All" Project? Also if one deletes a project with lots of tasks, should this delete the tasks
    //from the "All" project?
// Add CSS to editing project when clicked. maybe make the input box all red and switch the icon out with a save icon



