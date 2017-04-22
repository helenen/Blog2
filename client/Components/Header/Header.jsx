import React from 'react';
import ReactDOM from 'react-dom';
import './Header.scss';
import LazyLoad from 'react-lazy-load';


 class Header extends React.Component {
  render() {
    return (
     <div>
       <div className="accueil-photo"></div>
       <h1 className="title">Helene Niassy</h1>
     </div>
    );
  }
}

export default Header;
