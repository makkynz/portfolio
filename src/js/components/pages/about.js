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
          <p>I'm a full stack software developer based in Auckland, New Zealand. I have 17 years commercial experience building many successful web, desktop and server based applications for a wide variety of companies and industries. </p>
          <p>In 2003 I graduated from Auckland University of Technology with a bachelor's degree in Applied Science. </p>
          <p>In 2021 I gained a certification as a Microsoft Data Analyst Associate.</p>
          <p>My key technical skills revolve around (but not limited to) both back and front end web development using the Microsoft and Java stack of technologies.  e.g C#, Java, Sql Server, Sharepoint, Html, CSS, JS (React) </p>
          <div className="attachments">
          <a href="/AnthonyMarshall-Full-Resume.pdf" target="_blank">Resume <span className="ion-ios-paper-outline"></span></a>
          <a href="https://www.linkedin.com/in/anthonymarshallnz" target="_blank">LinkedIn <span className="ion-social-linkedin-outline"></span></a>
          <a className="ms-cert" href="https://www.credly.com/badges/1b102671-77bf-4a2c-b44d-182f944dabae/linked_in" target="_blank"><img src="/imgs/skills/ms-data-analyst-associate-cert.png"/></a>
          </div>
        </div>
      </div>
    );
  }
}


export default About;