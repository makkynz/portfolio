import React from 'react';
import 'whatwg-fetch';
import Brand from '../../containers/brand.container';

class Brands extends React.Component {
 
  componentWillMount() {
      this.props.fetchBrands();
  }

  getStyle(brandItem){   
    let file = '/imgs/brands/'+ brandItem.fileName
    return  {                       
        backgroundImage: "url("+file+")"           
      };
  }

  setSelectedBrand(brand){
     
     this.props.selectBrand(brand);
     this.props.openModal();
  }

  render() {   
    if(this.props.brands === null) return null;
    return (
      <div>
        <ul className="brands">
            {this.props.brands.map(brand =>
                <li 
                key={brand.key}  
                style={this.getStyle(brand)} 
                onClick={this.setSelectedBrand.bind(this, brand)}
                ></li>
              )}     
        </ul>
         <Brand></Brand>        
      </div>
    );
  }
}
export default Brands;