import React from 'react';
import Brands from '../../containers/brands.container';


class Projects extends React.Component {
    constructor() {
      super();
      
    }
  componentWillMount(){
    document.body.classList.add('projects-page'); 


    console.log(this.props.params.anz); 
  }

  
  componentWillUnmount(){
     document.body.classList.remove('projects-page');
  }
  
  render() {
    return (
      <div>     
        <h2>Brands that I have done work for...</h2>       
        <Brands params={this.props.params}></Brands>        
      </div> 
    );
  }
}


export default Projects;
