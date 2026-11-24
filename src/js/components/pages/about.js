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
          <h1>About Me</h1>
          <p>I'm Anthony Marshall, an Auckland-based Senior Software Developer specialising in data engineering, cloud platforms and enterprise software solutions.</p>
          <p>I have extensive experience designing and delivering enterprise solutions, particularly in financial services and investment management. My background spans traditional software development through to modern cloud-based data platforms.</p>

          <h2>What I Do</h2>
          <p>I currently work at the NZ Super Fund, designing and developing data platforms, pipelines and integrations that support complex investment operations.</p>
          <p>My technical experience includes:</p>
          <ul className="technology-list">
            <li><strong>Cloud &amp; Data:</strong> Azure, Snowflake, Azure Data Factory, Coalesce</li>
            <li><strong>Software Development:</strong> C#, .NET, SQL, REST APIs</li>
            <li><strong>DevOps:</strong> Azure DevOps, Git, CI/CD, Terraform</li>
            <li><strong>Architecture:</strong> Solution design, data modelling, system integration</li>
          </ul>

          <h2>My Approach</h2>
          <p>I enjoy solving complex technical problems and delivering practical, reliable and maintainable solutions. I combine hands-on technical expertise with an understanding of business requirements, working collaboratively across engineering teams and stakeholders.</p>

          <h2>Let's Connect</h2>
          <p>I'm always happy to connect with others working in software engineering, data platforms and cloud technology. Feel free to reach out through <a href="https://www.linkedin.com/in/anthonymarshallnz" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
          <div className="attachments">
          <a href="/Anthony-Marshall-Data-Engineering-CV.pdf" target="_blank">Resume <span className="ion-ios-paper-outline"></span></a>
          <a href="https://www.linkedin.com/in/anthonymarshallnz" target="_blank">LinkedIn <span className="ion-social-linkedin-outline"></span></a>
          <div className="certifications">
            <a href="https://www.credly.com/badges/1b102671-77bf-4a2c-b44d-182f944dabae/linked_in" target="_blank" rel="noopener noreferrer">
              <img src="/imgs/skills/ms-data-analyst-associate-cert.png" alt="Microsoft Certified Data Analyst Associate"/>
            </a>
            <a className="snowpro-cert" href="https://achieve.snowflake.com/e41a5773-3d99-4985-b133-b8dcf7b665c2#acc.4Wkv3BI0" target="_blank" rel="noopener noreferrer">
              <img src="https://images.credly.com/images/7a2ed5ab-2bed-4b5c-84e9-fc7c71275da4/linkedin_thumb_SnowProCoreTM600.png" alt="Snowflake SnowPro Core certification"/>
            </a>
            <a href="https://www.credly.com/badges/a0f11bfc-b002-4a0b-ab32-3a274989243c/public_url" target="_blank" rel="noopener noreferrer">
              <img src="https://images.credly.com/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png" alt="Professional Scrum Master I certification"/>
            </a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}


export default About;