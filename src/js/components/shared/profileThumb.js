import React from 'react';


class ProfileThumb extends React.Component {
 
 
  render() {
     return (
       <div className="profileTopRight">
       <div className="photo"></div>
        <div className="detail">
          <h1>Anthony Marshall</h1>          
          <a href="mailto:hello@anthonymarshall.io" >hello@anthonymarshall.io</a>
        </div>
       </div>
     )
  }
}
export default ProfileThumb;

