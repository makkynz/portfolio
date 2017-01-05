import React from 'react';
import 'whatwg-fetch';


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

  renderCoreSkills(){
    return (
      <section>
          <h2>Core technologies and development patterns that I like working with. </h2> 
          <ul className="skills">
            {this.props.skills.filter(s=>s.tags.indexOf('core-skill') > -1).map(skill =>
                <li 
                key={skill.key}  
                style={this.getStyle(skill)}                 
                ></li>
              )}     
        </ul>  
      </section>
    )
  }

  renderOtherSkills(){
    return (
      <section>
          <h2>Other skills that I have good experience with. </h2> 
          <ul className="skills">
            {this.props.skills.filter(s=>s.tags.indexOf('core-skill') == -1).map(skill =>
                <li 
                key={skill.key}  
                style={this.getStyle(skill)}                 
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
      </div>
    );
  }
}
export default SkillsList;