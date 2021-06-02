import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './routes/Home';
import About from './routes/About';
import Blog from './routes/Blog';
import Project from './routes/Project';
import Header from './components/Header';
import Page404 from './routes/Page404';
import Projects from './components/Projects';
import initial404Images from './data/initial404Images';
import initialProjects from './data/initialProjects';
import './App.css';


function App() {
  ReactGA.initialize('UA-148397600-2');
  ReactGA.pageview(window.location.pathname + window.location.search);

  const projects = initialProjects.length ? initialProjects.map(project => {
    var ComponentName = Projects[project.name]
    return(
      <Route key={project.id} path={'/projects/'+project.path}>
        <ComponentName />
      </Route>
      )
    }
  ) : null;
  return (
    <Router>
      <div>
      <Header />
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
        <Route exact path='/projects'>
          <Project />
        </Route>
        {projects}
        <Route path="*">
          <Page404 images={initial404Images}/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
