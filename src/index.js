import { TaskApp } from "./components/TaskApp";
import { Todo } from "./components/Todo";
import { getProjectName } from "./helpers";
import { renderProjects, renderAllTasks, renderProjLi, renderProject, renderTasks } from "./rendering/renderFuncs";


// //initialize the app
let taskApp = new TaskApp();
renderProject(taskApp.getProject("All"));


// Add test projects to the task app
taskApp.addProject("Home");
taskApp.addProject("school");
taskApp.addProject("work");
taskApp.addProject("backyard");

// remove projects from the app
// taskApp.removeProject("work");


// add test tasks to the projects
taskApp.projects[1].addTodo(new Todo("Hello1","testing", "21-21-21","low"));
taskApp.projects[1].addTodo(new Todo("Hello2","testing", "21-21-21","low"));
taskApp.projects[1].addTodo(new Todo("Hello3","testing", "21-21-21","low"));
taskApp.projects[1].addTodo(new Todo("Hello4","testing", "21-21-21","low"));
taskApp.projects[2].addTodo(new Todo("Hello2","tblahhhs", "35-56-18","Med"));
taskApp.projects[3].addTodo(new Todo("asdfasdf3","testingasdfasdfsadf", "02-05-1969","high"));


// //Removes a todo from the projects
// taskApp.projects[2].removeTodo("Hello2");




// //render projects tests
//renderProjects(taskApp.projects);
// renderTasks(taskApp.projects[2].tasks);



const viewProjects = document.querySelector("#viewAllProjects");

viewProjects.addEventListener("click", () => renderProjects(taskApp.projects));

const viewAllTasks = document.querySelector("#viewAllTasks");
viewAllTasks.addEventListener("click", () => renderAllTasks(taskApp.projects));

const form = document.querySelector("#projectForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let projName = getProjectName();
    taskApp.addProject(projName);
    let project = taskApp.getProject(projName);
    renderProjLi(project);
    form.reset();

});
console.log(taskApp);

//TODO:
//If one click on a project, it should update the header in content page and display the option to add a todo to the project.
// On the app init, it should come preloaded with a project called "All" which displays all the todos of the app
// Look into making a template for the content page for when a project doest have any todos. And then maybe a template for when a project does have todos
    // For example at the top of the page when a project has todos, maybe display "There are no todos in this project, click here to add a todo!"
// Figure out how the user will enter their todo. z.B Modal? Static form at top of page?
// How to persist data when page is refreshed. Look into how to store locally. Look at TOP instructions
// 












