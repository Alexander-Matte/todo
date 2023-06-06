import { Project } from "./Project";
import { Todo } from "./Todo";

export class TaskApp {
    projectsArray = [];

    constructor(){
        console.log("App Started");
    }

    addProject (project) {
        this.projectsArray.push(new Project(project));
    }

    removeProject (projectName) {
        for (let i = this.projectsArray.length - 1; i >= 0; --i) {
            if (this.projectsArray[i].name === projectName) {
                this.projectsArray.splice(i,1);
            }
        }
    }

}