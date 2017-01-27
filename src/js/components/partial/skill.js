import React from 'react';
import Modal from '../../containers/modal.container';
import Brands from '../../containers/brands.container';
import Carousel from '../shared/carousel';
import { browserHistory } from 'react-router';

class Skill extends React.Component {
  
  onClose(){
    this.props.deselectSkill(this.props.skill);
    this.props.closeModal();
     //browserHistory.push('/skills/');
  }

  getHeroStyle(){      
    let file = '/imgs/skills/'+ this.props.skill.fileName
    return  {                       
        backgroundImage: "url("+file+")"           
      };
  }

  gotoBrand(brand){
    
     window.reveal('cornertopleft', function(){
          browserHistory.push('/projects/'+brand);
    });
  }

  renderBrands(){
    if(this.props.skill.brands === undefined) return;
    return (
      <section className="tags">   
          
        <h4>Projects where I've  used {this.props.skill.name}.<div className="tip">Click to view details.</div></h4>
        <Brands filter={this.props.skill.brands} deepLinkToDetail={true} onClose={this.onClose.bind(this)}></Brands>         
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
        <hr/>  
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