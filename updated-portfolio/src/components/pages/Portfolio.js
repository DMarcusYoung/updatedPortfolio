import React from "react";

function Portfolio() {
  return (
    <div className="page-content">
      <h1 id="main-header">Portfolio</h1>
      <hr/>
      <div class="pic-container">
            <img class="portfolio-pic img-fluid rounded-circle hoverable" src={require("./../../images/Hangman pic.jpg")}/>
            <p class="port-imag-label">Hangman</p>
        </div>
        <div class="pic-container">
            <img class="portfolio-pic img-fluid rounded-circle hoverable" src={require("./../../images/RPG Pic.jpg")}/>
            <p class="port-imag-label">RPG Game</p>
        </div>
        <div class="pic-container">
            <img class="portfolio-pic img-fluid rounded-circle hoverable" src={require("./../../images/Trivia Pic.jpg")}/>
            <p class="port-imag-label">Trivia Game</p>
        </div>
        <div class="pic-container">
            <img class="portfolio-pic img-fluid rounded-circle hoverable" src={require("./../../images/Rutgers Pic.jpg")}/>
            <p class="port-imag-label">Rutgers Info Widget</p>
        </div>
        <div class="pic-container">
            <img class="portfolio-pic img-fluid rounded-circle hoverable" src={require("./../../images/Rock Paper Scissors Pic.jpeg")}/>
            <p class="port-imag-label">Rock Paper Scissors</p>
        </div>
    </div>
  );
}

export default Portfolio;