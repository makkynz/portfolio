import React from 'react';
import 'whatwg-fetch';

class Brands extends React.Component {
  constructor() {
    super();

    this.state = {
      brands: []
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

  render() {   
    return (
     <ul className="brands">
        {
          this.state.brands.map(brand =>
            <li key={brand.key}  style={this.getStyle(brand)}></li>
          )
        }     
     </ul>
    );
  }
}
export default Brands;