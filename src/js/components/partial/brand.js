import React from 'react';
import Modal from '../../containers/modal.container';

class Brand extends React.Component {
  
  onClose(brand){
    this.props.deselectBrand(brand);
    this.props.closeModal();
  }

  getContent(){
    var b= this.props.brand;
    return (
      <div>
        <h2>{b.name}</h2>          
        <div  dangerouslySetInnerHTML={{__html: b.description}}></div>
      </div>
    );
  }

  render() {   
    var content
    if(this.props.brand !== undefined) {
      content = this.getContent();
    };
  
    return (
      <Modal onClose={this.onClose.bind(this, this.props.brand)}>
        {content}        
      </Modal>
    );
  }
}
export default Brand;