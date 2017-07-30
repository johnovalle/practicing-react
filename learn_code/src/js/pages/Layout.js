import React from "react";
import Footer from "../components/Footer";
import { Switch, Route } from 'react-router-dom';
import Featured from "./Featured";
import Archived from "./Archived";
import Settings from "./Settings";

class Layout extends React.Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={Featured}/>
					<Route path='/archived' component={Archived}/>
					<Route path='/settings' component={Settings}/>
					<Route render={function() { return <p>Not Found </p>}} />
				</Switch>
				<Footer />
			</main>
		);
	}
}
export default Layout;

/*

					<Route path='/roster' component={Roster}/>
					<Route path='/schedule' component={Schedule}/>
*/


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