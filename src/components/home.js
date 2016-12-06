import React from 'react';
 

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentWillMount(){
    document.body.classList.add('home-page');
  }
  componentWillUnmount(){
     document.body.classList.remove('home-page');
  }
  
  render() {
    return (
      <h1>Home</h1>
    );
  }
}
export default Home;