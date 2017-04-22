import React from 'react';
import ReactDOM from 'react-dom';
import './Grid.scss';
var uh = require('unsplash');

class Grid extends React.Component {

  render() {
    return (
      <div>
        <div className="grid-container-main">
          <div className="grid-container">
            <div className="row">
              <div className="grid">
                  <img src={uh(320,300,'image=1083')} />
              </div>
              <div className="grid">
                <img src={uh(320,300,'image=1078')} />
              </div>
              <div className="grid">
                <img src={uh(320,300,'image=1082')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Grid;
