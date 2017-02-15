import React from 'react';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome"
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle(title) {
    console.log(title, this.state);
    this.setState({title});
  }
  render() {
    const title = "Welcome!";
    return (
      <div>
        <Header changeTitle={this.changeTitle} title={this.state.title}/>
        <Footer />
      </div>
    );
  }
}
