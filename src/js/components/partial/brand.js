import React from 'react';
import Modal from '../../containers/modal.container';

class Brand extends React.Component {
  
  onClose(brand){
    this.props.deselectBrand(brand);
    this.props.closeModal();
  }

  render() {   
    
    if(this.props.brand === undefined) return null;
  
    return (
      <Modal onClose={this.onClose.bind(this, this.props.brand)}>
        <h2>{this.props.brand.name}</h2>
      </Modal>
    );
  }
}
export default Brand;