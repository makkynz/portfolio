import { connect } from 'react-redux'
import Modal from '../components/shared/modal';
import {  deselectBrand } from '../actions/app.actions';

const mapStateToProps = (state) => { 
  
  return { 
    app: state.app
  }

}



export default connect(mapStateToProps, null)(Modal);