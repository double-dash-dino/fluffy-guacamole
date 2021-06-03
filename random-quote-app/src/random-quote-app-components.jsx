import React, { Component } from "react";
import ReactDOM from "react-dom";
import { quotes, colours } from "./random-quote-app-data.json";

function refreshPage() {
  window.location.reload();
}
const listOfQuotesAndAuthors = quotes;
const listOfQuotes = [];
const listOfAuthors = [];

for (var i = 0; i < quotes.length; i++) {
  listOfQuotes.push(listOfQuotesAndAuthors[i].quote);
  listOfAuthors.push(listOfQuotesAndAuthors[i].author);
}

const randomNumber = Math.random();
const colourNumber = Math.floor(randomNumber * 14);
const quoteNumber = Math.floor(randomNumber * 102);
const randomColour = colours[colourNumber]["main-colour"];
const randomColourDarker = colours[colourNumber]["border-colour"];

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="app" style={{ backgroundColor: randomColour }}>
        <Header />
        {console.log(colourNumber, randomColour)}
        <QuoteBox
          style={{ backgroundColor: randomColour, color: randomColour }}
        />
        <Footer style={{ color: randomColour }} />
      </div>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="header"
        style={{
          backgroundColor: "white",
          color: randomColour,
          borderColor: randomColourDarker,
        }}
      >
        <p className="header-text">I go left of header</p>
        <h3>I am a header</h3>
        <p className="header-text">I go right of header</p>
      </div>
    );
  }
}

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.refreshPage = this.refreshPage.bind(this);
  }

  render() {
    return (
      <div className="main-page" style={{ color: randomColour }}>
        <div
          className="quote-wrapper"
          style={{ backgroundColor: "white", color: randomColour }}
        >
          <div className="quote-field">
            <h1>{listOfQuotes[quoteNumber]}</h1>
          </div>
          <div className="quote-author">
            <h5>{listOfAuthors[quoteNumber]}</h5>
          </div>
          <div className="refresh-wrapper">
            <button
              className="refresh-button"
              onClick={refreshPage}
              style={{
                backgroundColor: randomColourDarker,
                border: "none",
                color: "white",
              }}
            >
              New quote!
            </button>
          </div>
          <div className="sharing-quote">
            <h5>I am sharing buttons</h5>
          </div>
        </div>
      </div>
    );
  }
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="footer"
        style={{
          backgroundColor: "white",
          color: randomColour,
          borderColor: randomColourDarker,
        }}
      >
        <p className="footer-text"> I go left of footer</p>
        <p className="footer-text"> I go right of footer</p>
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById("root"));

export default Application;
