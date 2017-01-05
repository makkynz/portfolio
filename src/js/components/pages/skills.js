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
        <h2>Technologies and development patterns that I have good experience with... </h2> 
        <SkillsList></SkillsList>
      </div> 
    );
  }
}


export default Skills;