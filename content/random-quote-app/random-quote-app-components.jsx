import * as React from "https://cdn.skypack.dev/react@17.0.1";
// fetch { quotes }  from "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <QuoteBox />
        <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <p className="header-text">I go left of header</p>
        <h3>I am a header</h3>
        <p className="header-text">I go right of header</p>
      </div>
    );
  }
}

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-page">
        <div className="quote-wrapper">
          <div className="quote-field">
            <h1>I am the quote</h1>
          </div>
          <div className="quote-author">
            <h5>I am the quote author</h5>
          </div>
          <div className="refresh-wrapper">
            <button className="refresh-button">I am the refresh button</button>
          </div>
          <div className="sharing-quote">
            <h5>I am sharing buttons</h5>
          </div>
        </div>
      </div>
    );
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <p className="footer-text"> I go left of footer</p>
        <p className="footer-text"> I go right of footer</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
