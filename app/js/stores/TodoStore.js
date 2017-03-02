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
    receiveTodos(todos) {
        this.todos = todos;
        this.emit("change");
    }
    getAll() {
        return this.todos;
    }
    handleActions(action){
        if(action.type === "CREATE_TODO"){
            this.createTodo(action.text);
        }
        if(action.type === "RECEIVE_TODOS"){
            this.receiveTodos(action.todos);
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
//window.todoStore = todoStore; //expose globally for testing only
export default todoStore;