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

  render() {   
    if(this.props.skills === null) return null;
    return (
      <div>
        <ul className="skills">
            {this.props.skills.map(skill =>
                <li 
                key={skill.key}  
                style={this.getStyle(skill)}                 
                ></li>
              )}     
        </ul>           
      </div>
    );
  }
}
export default SkillsList;