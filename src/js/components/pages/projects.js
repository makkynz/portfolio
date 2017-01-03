import React from 'react';
import Brands from '../../containers/brands.container';


class Projects extends React.Component {
    
  componentWillMount(){
    document.body.classList.add('projects-page');  
  }

  componentWillUnmount(){
     document.body.classList.remove('projects-page');
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