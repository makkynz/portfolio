import React from 'react';
import Modal from '../../containers/modal.container';
import Carousel from '../shared/carousel';

class Brand extends React.Component {
  
  onClose(brand){
    this.props.deselectBrand(brand);
    this.props.closeModal();
  }

  renderCarousel(){    
    if(!this.props.brand.carousel) return;
    return <Carousel items={this.props.brand.carousel} refs={this.props.brand.ref} /> 
  }

  renderContent(){
    var b= this.props.brand;
   
    return (
      <div>       
        {this.renderCarousel()}
        <div dangerouslySetInnerHTML={{__html: b.description}}></div>
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