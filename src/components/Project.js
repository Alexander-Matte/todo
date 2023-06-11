export class Project {
    todos = [];


    constructor (name) {
        this.name = name;
    }

    addTodo (todoObj) {
        this.todos.push(todoObj);
    }

    removeTodo (todoTitle) {
        for (let i = this.todos.length - 1; i >= 0; --i) {
            if (this.todos[i].title === todoTitle) {
                this.todos.splice(i,1);
            }
        }
    }
}