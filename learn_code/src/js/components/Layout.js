import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Welcome!"
		};
	}
	render() {
		setTimeout(()=>{
			this.setState({title: "Welcome!!!!"});
		}, 3000);
		return (
			<div>
				<Header title={this.state.title}/>
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