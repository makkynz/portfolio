import React from 'react';
 

class Home extends React.Component {
  
  constructor() {
    super();
    this.backgroundIndex = Math.floor(Math.random() * 3) + 1;
   
  }
  componentWillMount(){
   
    document.body.classList.add('home-page');
    document.body.classList.add('bg-'+this.backgroundIndex);
  }
  componentWillUnmount(){
     document.body.classList.remove('home-page');
     document.body.classList.remove('bg-'+this.backgroundIndex);
  }
  
  render() {
    return (
      <section className="content">
        <div className="photo"></div>
        <div className="detail">
          <h1>Anthony Marshall</h1>
          <h2>Software Developer</h2>
          <a href="mailto:anthonymarshall@gmail.com" >anthonymarshall@gmail.com</a>
          
        </div>
      
      </section>
    );
  }
}
export default Home;