import React from 'react';
import 'whatwg-fetch';
import Brand from '../../containers/brand.container';
import { browserHistory } from 'react-router';

class Brands extends React.Component {
  
 

  componentWillMount() {
    let deepLinkBrand =  (this.props.params !== undefined && this.props.params.brand !== undefined) ? this.props.params.brand  : null;
    this.props.fetchBrands(deepLinkBrand);

      
  }
 
  getStyle(brandItem){   
    let file = '/imgs/brands/'+ brandItem.fileName
    return  {                       
        backgroundImage: "url("+file+")"           
      };
  }

  getBrands(){
    if(this.props.filter !==undefined){
      return this.props.brands.filter(b=> this.props.filter.indexOf(b.ref) > -1);
    }else{
      return this.props.brands;
    }
  }

  getBrandComponent(){
    if(this.props.deepLinkToDetail !== undefined && this.props.deepLinkToDetail){
      return  null;
    }else{
      return <Brand></Brand>    ;
    }
  }

  setSelectedBrand(brand){
     if(this.props.deepLinkToDetail){
       this.gotoBrand(brand);  
     }else{
       browserHistory.push('/projects/'+brand.ref);
       this.props.selectBrand(brand);
     }   
    
  }
  gotoBrand(brand){
    this.props.onClose();
     window.reveal('cornertopleft', function(){
          browserHistory.push('/projects/'+brand.ref);
    });
  }

  render() {   
    if(this.props.brands === null) return null;
    let brands = this.getBrands();
    return (
      <div>
        <ul className="brands">
            {brands.map(brand =>
                <li 
                key={brand.key}  
                style={this.getStyle(brand)} 
                onClick={this.setSelectedBrand.bind(this, brand)}
                ></li>
              )}     
        </ul>
           {this.getBrandComponent()} 
      </div>
    );
  }
}
export default Brands;