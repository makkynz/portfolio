import React from 'react';
import Modal from '../../containers/modal.container';

class Brand extends React.Component {
  
  onClose(brand){
    this.props.deselectBrand(brand);
    this.props.closeModal();
  }

  render() {   
    var content
    if(this.props.brand !== undefined) {
      content = <h2>{this.props.brand.name}</h2>
    };
  
    return (
      <Modal onClose={this.onClose.bind(this, this.props.brand)}>
        {content}        
      </Modal>
    );
  }
}
export default Brand;