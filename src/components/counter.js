import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  onClickHandler(){
       this.setState({ count: this.state.count + 1 });
  }
 
  render() {
    return (
      <button onClick={this.onClickHandler.bind(this)}>
        Count: {this.state.count}
      </button>
    );
  }
}
export default Counter;