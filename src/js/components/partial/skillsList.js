import React from 'react';
import 'whatwg-fetch';
import Skill from '../../containers/skill.container';
import { browserHistory } from 'react-router';

class SkillsList extends React.Component {
 
  componentWillMount() {   

     let deepLinkSkill =  (this.props.params !== undefined && this.props.params.skill !== undefined) ? this.props.params.skill  : null;
  
     this.props.fetchSkills(deepLinkSkill);
  }

  getStyle(brandItem){   
    let file = '/imgs/skills/'+ brandItem.fileName
    return  {                       
        backgroundImage: "url("+file+")"           
      };
  } 

   setSelectedSkill(skill){     
     browserHistory.push('/skills/'+skill.ref);
     this.props.selectSkill(skill);    
  }

  renderCoreSkills(){
    return (
      <section>
          <h2>Technologies I usually work with</h2> 
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
          <h2>Other technologies I have good experience with </h2> 
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

  renderSoftSkills(){
    return (
      <section>
        <h2>Soft skills</h2>
        <div className="softSkillWrapper">
        <ul className="softSkills">
          <li> Exceptional verbal and written communication skills.</li>
          <li> Excellent time management skills and practices.</li>
          <li> Extensive client liaison and user training experience.</li>
          <li> Ability to quickly learn and adapt new technologies.</li>
          <li> Extensive experience managing and mentoring developers.</li>
          <li> Experience writing client facing technical documentation.</li>
          <li> Ability and experience in successfully architecting simple technical solutions for complex
          problems</li>
        </ul>
        </div>
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
        <hr/>
        {this.renderSoftSkills()}
        <Skill></Skill>          
      </div>
    );
  }
}
export default SkillsList;