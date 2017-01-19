import React from 'react';
 

class About extends React.Component {
    
  componentWillMount(){
    document.body.classList.add('about-page');  
  }

  componentWillUnmount(){
     document.body.classList.remove('about-page');
  }
  
  render() {
    return (    
      <div className="content"> 
        <div className="photo"></div>
        <div className="text">
          <h1>Hi,</h1>      
          <p>I'm a software developer from Auckland, New Zealand. Since 2002 I have built many succesful web and desktop based applications for a wide variety of companies and industries.</p>
          <p>I have Key technological experiences working with the Microsoft stack of technologies.  i.e Asp.net, Sql Server </p>
          <p>After having graduated from Auckland University of Technology with a degree in Applied Science, I have been working fulltime as dveloper since 2002 </p>
        </div>
      </div>
    );
  }
}


export default About;