import { Project } from "./Project";

export class TaskApp {
    
    projects = [];

    constructor(){
        console.log("App Started");
    }

    addProject (projectName) {
        let proj = new Project(projectName)
        this.projects.push(proj);
    }

    removeProject (projectName) {
        for (let i = this.projects.length - 1; i >= 0; --i) {
            if (this.projects[i].name === projectName) {
                this.projects.splice(i,1);
            }
        }
    }

}