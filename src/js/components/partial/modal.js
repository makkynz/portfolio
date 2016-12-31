import React from 'react';
import {findDOMNode} from 'react-dom'
import 'whatwg-fetch';
import classNames from 'classnames';
import Portal from 'react-portal';

class Modal extends React.Component {
  constructor(props) {
    super();
    this.state = {  
        isOpen : true    
    };
    this.handleMouseClickOutside = this.handleMouseClickOutside.bind(this);
  } 
  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseClickOutside);
  }

  handleMouseClickOutside(e) {
    if (isNodeInRoot(e.target, findDOMNode(this.refs.content))) {
      return;
    }
    e.stopPropagation();
    this.close();
  }

  close(){
      this.setState({isOpen : false});
      this.props.onClose();      
  }

  render() {   

    var modalClasses = classNames({
      'md-modal': true,
      'md-effect-3': true,
      'md-show': this.state.isOpen 
    });

    return (
        <Portal isOpened={this.state.isOpen} closeOnEsc closeOnOutsideClick>
            <div>
            <div className={modalClasses}>
                <div className="md-content">
                <a className="close" onClick={this.close.bind(this)}>Close</a>        
                    {this.props.children}        
                </div>
            </div>        
            <div className="md-overlay"></div>
            </div>
        </Portal>
    );
  }
}
export default Modal;

function isNodeInRoot(node, root) {
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}