import React from 'react';
 

class Skills extends React.Component {
 
  componentWillMount(){
    document.body.classList.add('resume-page');  
  }

  componentWillUnmount(){
     document.body.classList.remove('resume-page');
  }
  
  render() { 
    return (
      <h1>Skills</h1>
    );
  }
}
export default Skills;