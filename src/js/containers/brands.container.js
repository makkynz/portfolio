import { connect } from 'react-redux'
import { fetchBrands, selectBrand } from '../actions/brands.actions';
import { fetchSkills } from '../actions/skills.actions';
import { openModal } from '../actions/app.actions';
import Brands from '../components/partial/brands';


const mapStateToProps = (state) => {
   return { 
    brands: state.brands
  };
}

const mapDispatchToProps = (dispatch) => {  
  return {
    
    fetchBrands: () => {
      dispatch(fetchBrands());
     
    },

    fetchBrandsAndSkills: (deepLinkBrand) => {
      dispatch(fetchSkills()).then(() => {        
        dispatch(fetchBrands(deepLinkBrand));
      });
     
    },

    
    selectBrand: (brand)=>{
     
      dispatch(selectBrand(brand));
    },

    openModal: () =>{
      dispatch(openModal());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brands);