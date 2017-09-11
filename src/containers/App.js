import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

const App = () =>
  <div>
    <header>
      <Link to="/">Home</Link>
      {' '}
      <Link to="/about">About</Link>
      {' '}
      <Link to="/contact">Contact</Link>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>;

export default App;
