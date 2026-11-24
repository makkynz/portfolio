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
          <h2>Software &amp; Data Engineer</h2>
          <a href="mailto:anthonymarshall@gmail.com" >anthonymarshall@gmail.com</a>
          <div className="attachments">
            <a href="/Anthony-Marshall-Data-Engineering-CV.pdf" target="_blank" rel="noopener noreferrer">
              Resume <span className="ion-ios-paper-outline"></span>
            </a>
            <a href="https://www.linkedin.com/in/anthonymarshallnz" target="_blank" rel="noopener noreferrer">
              LinkedIn <span className="ion-social-linkedin-outline"></span>
            </a>
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
      
      </section>
    );
  }
}
export default Home;