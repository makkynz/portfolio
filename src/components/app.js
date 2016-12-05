import React from 'react';
import Nav from './nav';

class App extends React.Component {
  constructor() {
    super();
  
  }

  
  render() {
    return (
      <div>
        <Nav />        
        {this.props.children}
      </div>
    );
  }
}
export default App;