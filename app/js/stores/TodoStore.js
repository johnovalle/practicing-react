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
    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore;

export default todoStore;