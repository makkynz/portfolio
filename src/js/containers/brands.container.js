import { connect } from 'react-redux'
import { fetchBrands } from '../actions/brands.actions';
import Brands from '../components/partial/brands';


const mapStateToProps = (state) => {
 
  return { 
    brands: state.brands
  };
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    
    fetchPosts: () => {
      dispatch(fetchBrands());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brands);