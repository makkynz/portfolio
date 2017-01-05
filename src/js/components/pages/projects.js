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
        <h2>Brands that I have done work for...</h2>       
        <Brands></Brands>        
      </div> 
    );
  }
}


export default Projects;