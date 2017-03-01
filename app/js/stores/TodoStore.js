import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

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
    handleActions(action){
        if(action.type === "CREATE_TODO"){
            this.createTodo(action.text);
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
//window.todoStore = todoStore; //expose globally for testing only
export default todoStore;