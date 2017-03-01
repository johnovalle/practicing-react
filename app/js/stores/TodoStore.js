import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
    constructor(){
        super();
        this.todos = [
            {
                id: 123456789,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 87654321,
                text: "Pay Bills",
                complete: false
            }
        ]
    }
    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false
        });
        this.emit("change");
    }
    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore;
window.todoStore = todoStore; //expose globally for testing only
export default todoStore;