import React from 'react';
import 'whatwg-fetch';
import Brand from '../../containers/brand.container';

class Brands extends React.Component {
  constructor() {
    super();   
  }

  getBrandsData(){
    
  }

  componentWillMount() {

   // this.getBrandsData();
      this.props.fetchPosts();
  }

  getStyle(brandItem){

    let scale = 1
    let width = brandItem.sprite.width * scale
    let height = brandItem.sprite.height * scale
    let x = brandItem.sprite.x * scale
    let file = '/imgs/brands/'+ brandItem.fileName
    return  {                        
            
        backgroundImage: "url("+file+")"           
      };
  }

  setSelectedBrand(brand){
    dispatch(selectBrand(brand));
    //this.setState({selectedBrand: brand})
  }

  unselectBrand(){
    this.setState({selectedBrand: null})
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