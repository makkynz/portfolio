import React from 'react';
 

class About extends React.Component {
    
  componentWillMount(){
    document.body.classList.add('about-page');  
  }

  componentWillUnmount(){
     document.body.classList.remove('about-page');
  }
  
  render() {
    return (     
      <h1>About Me</h1>      
    );
  }
}


export default About;