import React from 'react';
import SkillsList from '../../containers/SkillsList.container';


class Skills extends React.Component {
    
  componentWillMount(){
    document.body.classList.add('skills-page');  
  }

  componentWillUnmount(){
     document.body.classList.remove('skills-page');
  }
  
  render() {
    return (
      <div>     
        <h1>Skills </h1> 
        <div className="copy-block">   
          <p>Skills and technologies that I have good experience with...</p>          
        </div>       
        <SkillsList></SkillsList>
      </div> 
    );
  }
}


export default Skills;