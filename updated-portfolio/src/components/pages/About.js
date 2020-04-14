import React from "react";

function About() {
  return (
    <div className="page-content">
      <h1 id="main-header">About Me</h1>
        <hr/>
        <div className="row">
          <div className="col-md-6">
              <p id="prof-description"><strong>Aloha! I'm legendary selfie taker Marcus Young. I'm a gap year student from Orinda California trying my best to step up my programming. I have two older brothers both of which are attending university in Ireland. I love the outdoors and enjoy playing most sports. I'm an avid pole vaulter and plan to vault in college next year on the east coast. I also enjoy playing music, mostly piano, which I learn pretty much all from youtube.</strong></p>     
          </div>
          <div className="col-md-5">
              <img className="img-fluid rounded-circle" src={require('./../../images/IMG_20190704_111758.jpg')} alt ="" width='400' height='200'/>
          </div>
        </div>
    </div>
  );
}

export default About;
