import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route,  Link} from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Projects from './Components/Projects/Projects.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import './index.scss';

ReactDOM.render((
  <HashRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path='/Projects' component={Projects} />
          <Route path='/AboutMe' component={AboutMe} />
      </div>
   </HashRouter >
), document.getElementById('root'));
