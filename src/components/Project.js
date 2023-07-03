export class Project {
    tasks = [];


    constructor (name) {
        this.name = name;
    }

    addTodo (todoObj) {
        this.tasks.push(todoObj);
    }

    removeTodo (todoTitle) {
        for (let i = this.tasks.length - 1; i >= 0; --i) {
            if (this.tasks[i].title === todoTitle) {
                this.tasks.splice(i,1);
            }
        }
    }
    
    getTask (taskTitle) {
        for (let i = this.tasks.length - 1; i >= 0; --i) {
            if (this.tasks[i].title === taskTitle) {
                return this.tasks[i];
            }
        }
    }

    updateTask(index, title,desc,dueDate,prio){
        this.tasks[index].title = title;
        this.tasks[index].description = desc;
        this.tasks[index].dueDate = dueDate;
        this.tasks[index].prio = prio;

    }

}