import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
		render() {
				return (
						<div>
								<Header />
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
//     }
//     getVal(val) {
//         return val * val;
//     }
//     render() {
//         return (
//             <div>
//                 <Header />
//                 <h1>It works! {this.getVal(3)} {this.test}</h1>
//             </div>
//         );
//     }
// }