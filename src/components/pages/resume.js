import React from 'react';
 

class Resume extends React.Component {
 
  componentWillMount(){
    document.body.classList.add('resume-page');  
  }

  componentWillUnmount(){
     document.body.classList.remove('resume-page');
  }
  
  render() { 
    return (
      <h1>Resume</h1>
    );
  }
}
export default Resume;