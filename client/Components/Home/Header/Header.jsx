import React from 'react';
import './header.scss';


class Header extends React.Component {

  render() {
    return (
      <div>
          <div className='header'>
            <div className='header-photo'></div>
            <div className='menu-header'>
              <ul className='items'>
                <li>Home</li>
                <li>Articles</li>
                <li>Travel</li>
                <li></li>
              </ul>
            </div>
            <div className='title-header'>jfhenljdkejdeded</div>
          </div>
      </div>
    );
  }

}

export default Header;
