import React from 'react';
import 'whatwg-fetch';
import Skill from '../../containers/skill.container';

class SkillsList extends React.Component {
 
  componentWillMount() {    
      this.props.fetchSkills();
  }

  getStyle(brandItem){   
    let file = '/imgs/skills/'+ brandItem.fileName
    return  {                       
        backgroundImage: "url("+file+")"           
      };
  } 

   setSelectedSkill(skill){     
     this.props.selectSkill(skill);    
  }

  renderCoreSkills(){
    return (
      <section>
          <h2>Core technologies that I usually working with. </h2> 
          <ul className="skills">
            {this.props.skills.filter(s=>s.tags.indexOf('core-skill') > -1).map(skill =>
                <li 
                key={skill.key}  
                style={this.getStyle(skill)}   
                 onClick={this.setSelectedSkill.bind(this, skill)}              
                ></li>
              )}     
        </ul>  
      </section>
    )
  }

  renderOtherSkills(){
    return (
      <section>
          <h2>Other technologies that I have good experience with. </h2> 
          <ul className="skills">
            {this.props.skills.filter(s=>s.tags.indexOf('core-skill') == -1).map(skill =>
                <li 
                key={skill.key}  
                style={this.getStyle(skill)}    
                onClick={this.setSelectedSkill.bind(this, skill)}                          
                ></li>
              )}     
        </ul>  
      </section>
    )
  }

  render() {   
    if(this.props.skills === null) return null;
    return (
      <div>
      {this.renderCoreSkills()}   
      <hr/>
      {this.renderOtherSkills()}   
       <Skill></Skill>          
      </div>
    );
  }
}
export default SkillsList;