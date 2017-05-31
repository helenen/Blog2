import React from 'react';
import Menu from '../Menu/Menu.jsx';
import Grid from '../Grid/Grid.scss';
import './Projects.scss';
import Assets from "../../Assets.js";
import photoOne from "../Assets/photo-one.jpg";
import photoTwo from "../Assets/photo-two.jpg";
import photoThree from "../Assets/photo-three.jpg";


class Projects extends React.Component {
  render() {
    return (
      <div>
        <Menu className="menu-projects" />
          <div className="grid-container-main">
            <div className="grid-container-project">
              <div className="row">
                <div className="grid-project">
                  <a href="http://localhost:8080/#/">
                    <img src={photoOne} className="grid-project"/>
                  </a>
                </div>
                <div >
                  <a href="https://tintsofpink.herokuapp.com/">
                    <img src={photoTwo} className="grid-project"/>
                  </a>
                </div>
              </div>
              <div className="row">
                <div >
                  <a href="https://helenen.github.io/carnet-de-voyage/">
                    <img src={photoThree} className="grid-project"/>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default Projects;
