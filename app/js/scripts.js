import React from 'react';
import ReacDOM from 'react-dom';

class Layout extends React.Component {
  render() {
    return (
      <h1>React is working!</h1>
    );
  }
}

const app = document.getElementById('app');
ReacDOM.render(<Layout/>, app);
