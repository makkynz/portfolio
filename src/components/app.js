import React from 'react';
import Nav from './partial/nav';

class App extends React.Component {
  constructor() {
    super();
  
  } 
  
  render() {
    return (
      <div >
        <Nav />    
        <section className="page-content">    
          {this.props.children}
        </section>
      </div>
    );
  }
}
export default App;