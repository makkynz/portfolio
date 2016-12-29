import React from 'react';
import Nav from './partial/nav';
import Promise from 'promise-polyfill'; 
import Modal from './partial/modal';

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
         <Modal>
          <h2>Yeah Boi!</h2>
        </Modal>
      </div>
    );
  }
}
export default App;