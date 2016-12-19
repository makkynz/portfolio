import React from 'react';
import 'whatwg-fetch';
import Brand from '../partial/brand';

class Brands extends React.Component {
  constructor() {
    super();

    this.state = {
      brands: [],
      selectedBrand: null
    };
  }

  getBrandsData(){
    
    fetch('/data/brands.json')
      .then(response => response.json())
      .then(json=> {    
        json.forEach((item, i)=> {
           json[i].key = i;           
         })             
         this.setState({brands : json});
      })
  }

  componentWillMount() {

    this.getBrandsData();
      
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
    this.setState({selectedBrand: brand})
  }

  unselectBrand(){
    this.setState({selectedBrand: null})
  }

  render() {   
    return (
      <div>
        <ul className="brands">
            {this.state.brands.map(brand =>
                <li 
                key={brand.key}  
                style={this.getStyle(brand)} 
                onClick={this.setSelectedBrand.bind(this, brand)}
                ></li>
              )}     
        </ul>
        <Brand brandData={this.state.selectedBrand} onClose={this.unselectBrand.bind(this)}></Brand>        
      </div>
    );
  }
}
export default Brands;