import { connect } from 'react-redux'
import Brand from '../components/partial/brand';


const mapStateToProps = (state) => {
 
  return { 
    brandData: state.brands.find(b => b.isSelected)
  };
}


export default connect(mapStateToProps, null)(Brand);