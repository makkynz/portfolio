import React from 'react';
import Modal from '../../containers/modal.container';
import Carousel from '../shared/carousel';

class Brand extends React.Component {
  
  onClose(brand){
    this.props.deselectBrand(brand);
    this.props.closeModal();
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
            {this.props.brand.tags.map((item, i) =>
                <li key={i}>{item}</li>
            )}   
        </ul> 
      </section>
    )
  }

  renderHtmlContent(){   
    if(this.props.brand.html === undefined) return;
    return <section dangerouslySetInnerHTML={{__html: this.props.brand.html}}></section>
  }

  renderContent(){
    
    return (
      <div className="brand">       
        {this.renderCarousel()}
        {this.renderTags()}
       
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