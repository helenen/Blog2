import React from 'react';
import './Menu.scss';

class Menu extends React.Component {

  render() {
    return (
      <div>
        <div className="menu">
          <ul className="items">
            <li>Home</li>
            <li>Projects</li>
            <li>About Me</li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Menu;
