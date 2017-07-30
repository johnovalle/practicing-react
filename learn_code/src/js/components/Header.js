import React from "react";
import Title from "./Header/Title";
import { NavLink } from 'react-router-dom';

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
            <header>
                <nav className="nav">
                    <ul>
                        <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
                        <li><NavLink activeClassName='active' to='/archived'>Archived</NavLink></li>
                        <li><NavLink activeClassName='active' to='/settings'>Settings</NavLink></li>
                        <li><NavLink activeClassName='active' to='/broke'>Broken</NavLink></li>
                    </ul>
                </nav>
                <Title title={this.props.title}/>
                <input value={this.props.title} onChange={this.handleChange} />
                
            </header>
        );
    }
}
export default Header;
