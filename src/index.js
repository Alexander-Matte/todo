import { TaskApp } from "./modules/TaskApp";
import { Todo } from "./modules/Todo";

let taskApp = new TaskApp();
taskApp.addProject("Home");
taskApp.addProject("school");
taskApp.addProject("work");
taskApp.addProject("backyard");



taskApp.projectsArray[2].addTodo(new Todo("Hello","testing", "21-21-21","low"));
console.log(taskApp);
