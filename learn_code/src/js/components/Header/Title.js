import React from "react";

// export default class Title extends React.Component {
//     render() {
//         return (
//             <h1>{this.props.title}</h1>
//         );
//     }
// }
export default function Title(props) {
  return (
    <h1>{props.title}</h1>
  );
}