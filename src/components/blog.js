import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  
  render() {
    return (
      <h1>My blog</h1>
    );
  }
}
export default Blog;