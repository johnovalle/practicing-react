import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Welcome!"
		};
		this.changeTitle = this.changeTitle.bind(this);
	}
	
	changeTitle(title){
		this.setState({title});
	}
	
	render() {
		return (
			<div>
				<Header changeTitle={this.changeTitle} title={this.state.title}/>
				<Footer />
			</div>
		);
	}
}
export default Layout;




// class Layout extends React.Component {
//     constructor() {
//         super();
//         this.test = 5;
//					this.state = {name: "John"};
//     }
//     getVal(val) {
//         return val * val;
//     }
//     render() {
//			setTimeout(()=>{
//				this.setState({name: "JO"});
//			}, 1000);
///
//         return (
//             <div>
//								{this.state.name}
//                 <Header />
//                 <h1>It works! {this.getVal(3)} {this.test}</h1>
//             </div>
//         );
//     }
// }