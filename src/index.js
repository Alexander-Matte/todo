import { TaskApp } from "./modules/TaskApp";

let taskApp = new TaskApp();
taskApp.addProject("Home");
taskApp.addProject("school");
taskApp.addProject("work");
taskApp.addProject("backyard");
taskApp.removeProject("Home");
console.log(taskApp);