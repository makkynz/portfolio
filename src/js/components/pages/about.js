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
          <p>I'm a software developer based in Auckland, New Zealand. I have 14 years commercial experience building many successful web and desktop based applications for a wide variety of companies and industries. </p>
          <p>In 2003 I graduated from Auckland University of Technology with a bachelor's degree in Applied Science. </p>
          <p>My key technical experiences revolve around (buy not limited to) both back and front end web development using the Microsoft stack of technologies.  i.e C#, Asp.net, Sql Server, Html, CSS, JS (Angular) </p>
          
          <p className="resume"><a href="/resume.pdf" target="_blank">View my resume <span className="ion-ios-paper"></span></a></p>
        </div>
      </div>
    );
  }
}


export default About;