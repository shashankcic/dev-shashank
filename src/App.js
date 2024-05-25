import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Blog from './routes/Blog';
import Project from './routes/Project';
import Header from './components/Header';
import Page404 from './routes/Page404';
import Search from './routes/Search';
import Projects from './components/Projects';
import initial404Images from './data/initial404Images';
import initialProjects from './data/initialProjects';
import './App.css';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-148397600-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const projectRoutes = initialProjects.map(({ id, name, path }) => {
    const ComponentName = Projects[name];
    return (
      <Route key={id} path={`/projects/${path}`} element={<ComponentName />} />
    );
  });

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/projects' element={<Project />} />
          {projectRoutes}
          <Route path='/search' element={<Search searchField={""} />} />
          <Route path="*" element={<Page404 images={initial404Images} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;