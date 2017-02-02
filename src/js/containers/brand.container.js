import { connect } from 'react-redux'
import Brand from '../components/partial/brand';
import {  deselectBrand } from '../actions/brands.actions';
import { closeModal } from '../actions/app.actions';

const mapStateToProps = (state) => { 
 
  return { 
    brand: state.brands.find(b => b.isSelected),
    skills: state.skills
  };
}

const mapDispatchToProps = (dispatch) => {
  
  return {   
    deselectBrand: (brand)=>{
     
      dispatch(deselectBrand(brand));
    },
    closeModal: ()=>{
      dispatch(closeModal());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Brand);