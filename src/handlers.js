import { Project } from "./components/Project";
import { TaskApp } from "./components/TaskApp";
export function createProject() {
    let projectName = document.querySelector("#projectName").value;
    return projectName;
}