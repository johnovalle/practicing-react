import React from "react";

export default class Todo extends React.Component {
    render() {
        const { text } = this.props;

        return (
            <div>
                {text}
                <a class="btn btn-default btn-xs" href="#">x</a>
            </div>
        );
    }
}