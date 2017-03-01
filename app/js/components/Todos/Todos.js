import React from "react";

import Todo from "../common/Todo";

export default class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
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

    };

    render() {
        const { todos } = this.state;
        const TodoComponents = todos.map(todo => {
           return <Todo key={todo.id} {...todo} />;
        });

        return (
            <div>
                <h1>Todos</h1>
                <div class="row">{TodoComponents}</div>
            </div>
        );
    }
}