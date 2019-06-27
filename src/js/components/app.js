import React from 'react';
import Nav from './shared/nav';
import ProfileThumb from './shared/profileThumb';
import Promise from 'promise-polyfill'; 

class App extends React.Component {
  constructor() {
    super();

    // To add to window
 
    if (!window.Promise) {
      window.Promise = Promise;
    }
  } 
   getChildContext() {
    return {
      location: this.props.location
    }
  }
  
  render() {
     
    return (
      <div >
        <header>
          <ProfileThumb/>
          <Nav />  
        </header>      
        <section className="page-content">    
          {this.props.children}
        </section>
      </div>
    );
  }
}


App.childContextTypes = {
    location: React.PropTypes.object
}

export default App;
