import { Project } from "./Project";

export class TaskApp {
    
    projects = [];

    constructor(){
        console.log("App Started");
        this.addProject("All");
        this.currentSelected = this.getProject("All");
    }

    addProject (projectName) {
        let proj = new Project(projectName)
        this.projects.push(proj);
    }

    removeProject (project) {
        for (let i = this.projects.length - 1; i >= 0; --i) {
            if (this.projects[i].name === project.name) {
                this.projects.splice(i,1);
            }
        }
    }

    //returns the project object from array
    getProject (projectName) {
        for (let i = this.projects.length - 1; i >= 0; --i) {
            if (this.projects[i].name === projectName) {
                return this.projects[i];
            }
        }
    }


}