import React from 'react';
import Brands from '../../containers/brands.container';


class Projects extends React.Component {
    constructor() {
      super();
      
    }
  componentWillMount(){
    document.body.classList.add('projects-page'); 

  }

  
  componentWillUnmount(){
     document.body.classList.remove('projects-page');
  }
  
  render() {
    return (
      <div>     
        <h2>Brands I have done work&nbsp;for</h2>       
        <Brands params={this.props.params}></Brands>        
      </div> 
    );
  }
}


export default Projects;
