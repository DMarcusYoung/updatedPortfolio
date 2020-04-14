import React from "react";

function Contact() {
  return (
    <div className="page-content">
      <h1 id="main-header">Contact</h1>
      <hr/>
      <div class="md-form input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text md-addon" id="material-addon1">Name:</span>
        </div>
        <input type="text" class="" placeholder="ex.) John Smith"/>
      </div>
      
      <div class="md-form input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text md-addon" id="material-addon1">Email:</span>
        </div>
        <input type="text" class="" placeholder="ex.) example@gmail.com"/>
      </div>

      <div class="md-form input-group input-group-lg">
        <div class="input-group-prepend">
          <span class="input-group-text md-addon">Message:</span>
        </div>
        <textarea class="md-textarea form-control" placeholder="What's Up?"></textarea>
      </div>
      <br/>
    </div>
  );
}

export default Contact;
