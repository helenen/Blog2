import React from 'react';
import ReactDOM from 'react-dom';
import './Grid.scss'

class Grid extends React.Component {

  render() {
    return (
      <div>
        <div className="grid-container-main">
          <div className="grid-container">
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
          </div>
        </div>
      </div>
    );
  }

}

export default Grid;
