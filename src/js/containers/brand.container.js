import { connect } from 'react-redux'
import Brand from '../components/partial/brand';
import {  deselectBrand } from '../actions/brands.actions';

const mapStateToProps = (state) => { 
  return { 
    brandData: state.brands.find(b => b.isSelected)
  };
}

const mapDispatchToProps = (dispatch) => {
  
  return {   
    deselectBrand: (brand)=>{
      dispatch(deselectBrand(brand));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Brand);