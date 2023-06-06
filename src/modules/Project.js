import { Todo } from "./Todo";

export class Project {
    todosArray = [];


    constructor (name) {
        this.name = name;
    }

    addTodo (todoObj) {
        this.todosArray.push(todoObj);
    }
}