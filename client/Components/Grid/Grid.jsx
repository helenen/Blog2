import React from 'react';
import ReactDOM from 'react-dom';
import './Grid.scss';

class Grid extends React.Component {

  render() {

    return (
      <div>
        <div className="grid-container-main">
          <div className="grid-container">
            <div className="row">
              <div className="grid">
                  <img src='https://unsplash.it/320/300?random'  />
              </div>
              <div className="grid">
                <img src='https://unsplash.it/320/300?random=2'/>
              </div>
              <div className="grid">
                <img src='https://unsplash.it/320/300?random=3' />
              </div>
            </div>
            <div className="row">
              <div className="grid">
                  <img src="https://unsplash.it/320/300?random=4" />
              </div>
              <div className="grid">
                <img src='https://unsplash.it/320/300?random=5' />
              </div>
              <div className="grid">
                <img src='https://unsplash.it/320/300?random=6' />
              </div>
            </div>
            <div className="row">
              <div className="grid">
                  <img src="https://unsplash.it/320/300?random=7" />
              </div>
              <div className="grid">
                <img src='https://unsplash.it/320/300?random=8' />
              </div>
              <div className="grid">
                <img src='https://unsplash.it/320/300?random=9' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Grid;
