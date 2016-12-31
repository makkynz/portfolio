import React from 'react';
import 'whatwg-fetch';
import Brand from '../../containers/brand.container';

class Brands extends React.Component {
 
  componentWillMount() {
      this.props.fetchPosts();
  }

  getStyle(brandItem){   
    let file = '/imgs/brands/'+ brandItem.fileName
    return  {                       
        backgroundImage: "url("+file+")"           
      };
  }

  setSelectedBrand(brand){
    dispatch(selectBrand(brand));
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
                onClick={this.props.selectBrand.bind(this, brand)}
                ></li>
              )}     
        </ul>
         <Brand></Brand>        
      </div>
    );
  }
}
export default Brands;