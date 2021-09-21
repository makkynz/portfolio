import React from 'react';
import Modal from '../../containers/modal.container';
import Carousel from '../shared/carousel';
import { browserHistory } from 'react-router';

class Brand extends React.Component {
  
  onClose(brand){
    this.props.deselectBrand(brand);
    this.props.closeModal();
  }

  gotoSkill(item, i){;
   
    let skill = this.props.skills.filter(f=>f.name.toLowerCase() == item.toLowerCase() || f.ref.toLowerCase() == item.toLowerCase())[0];
   
    this.props.closeModal();
     window.reveal('cornertopleft', function(){
          browserHistory.push('/skills/'+skill.ref);
    });
  }


  getSkillName(ref){
    if(!this.props.skills) return ref;
     let skill = this.props.skills.filter(f=>f.ref.toLowerCase() == ref.toLowerCase());
     return skill && skill.length > 0 ? skill[0].name : ref;
  }

  renderCarousel(){    
   
    let defaultImage = '/imgs/brands/'+ this.props.brand.fileName
    return <section><Carousel items={this.props.brand.carousel} defaultImage={defaultImage} refs={this.props.brand.ref} /></section>
  }

  renderTags(){
    return (
      <section className="tags">
        <h3>Tech stack:</h3>
        <ul className="tags">
            {this.props.brand.tags.filter((item )=>{return this.getSkillName(item) !== null;} ).map((item, i) =>
                <li key={i}  onClick={this.gotoSkill.bind(this, item, i)}>{this.getSkillName(item)}</li>
            )}   
        </ul> 
      </section>
    )
  }

  renderHtmlContent(){   
    if(this.props.brand.html === null ) return <section><div className="tip">Please contact me for details</div></section>
 
    return <section dangerouslySetInnerHTML={{__html: this.props.brand.html}}></section>
  }

  renderContent(){
    
    return (
      <div className="brand">       
        {this.renderCarousel()}
        {this.renderTags()}
        {this.renderHtmlContent()}
      </div>
    );
  }

  render() {   
    
    var content
    if(this.props.brand !== undefined) {
      content = this.renderContent();
    };
  
    return (
      <Modal onClose={this.onClose.bind(this, this.props.brand)}>
        {content}        
      </Modal>
    );
  }
}
export default Brand;