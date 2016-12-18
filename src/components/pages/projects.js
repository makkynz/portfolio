import React from 'react';
import Brands from '../partial/brands';

class Projects extends React.Component {
    
  componentWillMount(){
    document.body.classList.add('about-page');  
  }

  componentWillUnmount(){
     document.body.classList.remove('about-page');
  }
  
  render() {
    return (
      <div>     
        <h1>Projects </h1> 
        <div className="copy-block">   
          <p>Some brands that I have done work for...</p>          
        </div>
        <Brands></Brands> 
      </div> 
    );
  }
}


export default Projects;