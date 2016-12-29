import React from 'react';
import 'whatwg-fetch';
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Modal extends React.Component {
  
  close(){
      //this.props.onClose(); 
      console.log('click');     
  }

  render() {   

    var modalClasses = classNames({
      'md-modal': true,
      'md-effect-3': true,
      'md-show': this.props.app[0].showModal 
    });

    return (
        <div>
            <div className={modalClasses}>
                <div className="md-content">
                <a className="close" onClick={this.close.bind(this)}>Close</a>        
                    {this.props.children}        
                </div>
            </div>        
            <div className="md-overlay"></div>
        </div>
    );
  }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        app: state.app
    };
}

export default connect(mapStateToProps)(Modal);
//export default Modal;