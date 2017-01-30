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
      <section className="content">
        <div className="photo"></div>
        <div className="detail">
          <h1>Anthony Marshall</h1>
          <h2>Software Developer</h2>
          <a href="mailto:hello@anthonymarshall.io" >hello@anthonymarshall.io</a>
          
        </div>
        <div className="note">This site is  under development. Some content has yet to be added.  </div>
      </section>
    );
  }
}
export default Home;