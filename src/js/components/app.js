import React from 'react';
import Nav from './partial/nav';
import Promise from 'promise-polyfill'; 

class App extends React.Component {
  constructor() {
    super();

    // To add to window
    if (!window.Promise) {
      window.Promise = Promise;
    }
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