import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Page404 from './components/Page404';


function App() {
  return (
    <Router>
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
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
