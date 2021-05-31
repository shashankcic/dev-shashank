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
import Project from './components/Project';
import Page404 from './components/Page404';
import initial404Images from './data/initial404Images';
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
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/projects'>
          <Project />
        </Route>
        <Route path="*">
          <Page404 images={initial404Images}/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
