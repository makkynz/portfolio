import React from 'react';
import Modal from '../../containers/modal.container';
import Carousel from '../shared/carousel';
import { browserHistory } from 'react-router';

class Skill extends React.Component {
  
  onClose(){
    this.props.deselectSkill(this.props.skill);
    this.props.closeModal();
  }

  getHeroStyle(){      
    let file = '/imgs/skills/'+ this.props.skill.fileName
    return  {                       
        backgroundImage: "url("+file+")"           
      };
  }

  gotoBrand(brand){
    this.onClose();
     window.reveal('cornertopleft', function(){
          browserHistory.push('/projects/'+brand);
    });
  }

  renderBrands(){
    if(this.props.skill.brands === undefined) return;
    return (
      <section className="tags">       
        <h3>Projects using {this.props.skill.name}:</h3>
        <ul className="tags">
            {this.props.skill.brands.map((item, i) =>
                <li key={i}
                 onClick={this.gotoBrand.bind(this, item)} >{item}</li>
            )}   
        </ul> 
      </section>
    )
  }

  renderHero(){
    return(
      <section>
        <div className="hero"  style={this.getHeroStyle()} ></div>
      </section>
    )
  }
 
  renderContent(){
   
    return (
      <div className="skill">   
        {this.renderHero()}   
        {this.renderBrands()}
      </div>
    );
  }

  render() {   
    
    var content
    if(this.props.skill !== undefined) {
      content = this.renderContent();
    };
  
    return (
      <Modal onClose={this.onClose.bind(this, this.props.skill)}>
        {content}        
      </Modal>
    );
  }
}
export default Skill;