import dispatcher from '../dispatcher';

export function createTodo(text){
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        text
    });
}

export function deleteTodo(id){
    dispatcher.dispatch({
        type: 'DELETE_TODO',
        id
    });
}

export function reloadTodos(){
    dispatcher.dispatch({
        type: 'FETCH_TODOS'
    });
    setTimeout(()=>{
        var todos = [
            {
                id: 19999999,
                text: "Do laundry",
                complete: false
            },
            {
                id: 80760021,
                text: "Cook dinner",
                complete: true
            }
        ];
        dispatcher.dispatch({
            type: 'RECEIVE_TODOS',
            todos
        });
        if(false){
            dispatcher.dispatch({
                type: 'FETCH_TODOS_ERROR'
            });
        }
    },1000)
}