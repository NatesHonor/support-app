import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h1>Sample Company Support</h1>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="content">
      <h2>Welcome to Sample Company Support</h2>
      <Link to="/contact">
        <button>Contact Support</button>
      </Link>
    </div>
  );
}

function Contact() {
  return (
    <div className="content">
      <h2>Contact Support</h2>
      <div>
        <p>Call our support team at: <a href="tel:+123456789">123-456-789</a></p>
        <Link to="/contact/message">
          <button>Send a Message</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
