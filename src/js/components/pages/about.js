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
          <p>I'm a full stack software developer based in Auckland, New Zealand. I have 14 years commercial experience building many successful web, desktop and server based applications for a wide variety of companies and industries. </p>
          <p>In 2003 I graduated from Auckland University of Technology with a bachelor's degree in Applied Science. </p>
          <p>My key technical skills revolve around (but not limited to) both back and front end web development using the Microsoft stack of technologies.  i.e C#, Asp.net, Sql Server, Html, CSS, JS (React) </p>
          
          <p className="attachment"><a href="/resume.pdf" target="_blank">Resume <span className="ion-ios-paper-outline"></span></a></p>
          <p className="attachment"><a href="https://www.linkedin.com/in/anthonymarshallnz" target="_blank">LinkedIn <span className="ion-social-linkedin-outline"></span></a></p>
        </div>
      </div>
    );
  }
}


export default About;