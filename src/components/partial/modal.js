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
      //this.setState({isOpen: false})
  }

  render() {   


    var modalClasses = classNames({
      'md-modal': true,
      'md-effect-3': true,
      'md-show': this.state.isOpen 
    });

    return (
        <div>
            <div className={modalClasses} id="modal-1">
                <div className="md-content">
                <a onClick={this.close.bind(this)}>Close</a>        
                    {this.props.children}        
                </div>
            </div>        
            <div className="md-overlay"></div>

        </div>
    );
  }
}
export default Modal;