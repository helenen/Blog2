import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route,  Link} from 'react-router-dom';
import Home from './Components/Home/HomePage.jsx';

import './index.scss';

ReactDOM.render((
  <HashRouter>
      <div>
        <Route exact path="/" component={Home} />
      </div>
   </HashRouter >
), document.getElementById('root'));
