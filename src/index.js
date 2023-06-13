import { Project } from "./components/Project";
import { TaskApp } from "./components/TaskApp";
import { Todo } from "./components/Todo";
import { renderProjects, renderAllTasks } from "./rendering/renderFuncs";
import { createProject } from "./handlers";


// //initialize the app
let taskApp = new TaskApp();



taskApp.addProject("Home");
taskApp.addProject("school");
taskApp.addProject("work");
taskApp.addProject("backyard");

// remove projects from the app
// taskApp.removeProject("work");


// add tasks to the projects
taskApp.projects[0].addTodo(new Todo("Hello1","testing", "21-21-21","low"));
taskApp.projects[1].addTodo(new Todo("Hello2","tblahhhs", "35-56-18","Med"));
taskApp.projects[2].addTodo(new Todo("asdfasdf3","testingasdfasdfsadf", "02-05-1969","high"));


// //Removes a todo from the projects
// taskApp.projects[2].removeTodo("Hello2");




// //render projects tests
// renderProjects(taskApp.projects);
// renderTasks(taskApp.projects[2].tasks);



const viewProjects = document.querySelector("#viewAllProjects");

viewProjects.addEventListener("click", () => renderProjects(taskApp.projects));

const viewAllTasks = document.querySelector("#viewAllTasks");
viewAllTasks.addEventListener("click", () => renderAllTasks(taskApp.projects));

const form = document.querySelector("#projectForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    taskApp.addProject(createProject());
    console.log(taskApp);
});















