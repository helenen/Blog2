import React from 'react';
import './Menu.scss';
import {Link} from 'react-router-dom';

class Menu extends React.Component {

  render() {
    return (
      <div>
        <div className="menu">
          <ul className="items">
            <Link to="/"><li>Home</li></Link>
            <Link to="/Projects"><li>Projects</li></Link>
            <Link to="/AboutMe"><li>About me</li></Link>
          </ul>
        </div>
      </div>
    );
  }

}

export default Menu;
