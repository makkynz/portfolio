import React from 'react';
import Modal from '../partial/modal';

class Brand extends React.Component {
  constructor() {
    super();    
  } 

  onClose(brand){
    this.props.deselectBrand(brand);
  }

  render() {   
    if(this.props.brandData === undefined) return null;
    return (
      <Modal onClose={this.onClose.bind(this, this.props.brandData)}>
        <h2>{this.props.brandData.name}</h2>
      </Modal>
    );
  }
}
export default Brand;