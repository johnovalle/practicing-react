import React from "react";
import Title from "./Header/Title";

class Header extends React.Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.props.changeTitle(e.target.value);
    }
    
    render() {
        return (
            <div>
                <Title title={this.props.title}/>
                <input value={this.props.title} onChange={this.handleChange} />
            </div>
        );
    }
}
export default Header;
