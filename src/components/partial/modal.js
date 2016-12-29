import React from 'react';
import 'whatwg-fetch';
import classNames from 'classnames';

class Modal extends React.Component {
  constructor(props) {
    super();
    this.state = {  
        isOpen : true    
    };
  } 

  close(){
      this.props.onClose();      
  }

  render() {   

    var modalClasses = classNames({
      'md-modal': true,
      'md-effect-3': true,
      'md-show': this.state.isOpen 
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
export default Modal;