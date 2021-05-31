import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Page404 from './components/Page404';
import './App.css';


function App() {
  ReactGA.initialize('UA-148397600-2');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/blog'>
          <Blog />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
