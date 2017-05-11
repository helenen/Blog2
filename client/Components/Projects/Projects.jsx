import React from 'react';
import Menu from '../Menu/Menu.jsx';
import Grid from '../Grid/Grid.scss';
import './Projects.scss';
import Assets from "../../Assets.js";
import axios from 'axios';

class Projects extends React.Component {
  constructor() {
      super();
      this.state = {
        gifs: []
      };
    }

    componentDidMount() {
      axios.get('https://api.unsplash.com/collections/featured')
        .then(response => {
          this.setState({
            gifs: response.data.pokemon
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <Menu className="menu-projects" />
          <div className="grid-container-main">
            <div className="grid-container">
              <div className="row">
                <div className="grid">
                    <img src='https://source.unsplash.com/collection/617562/320x300'  />
                </div>
                <div className="grid">
                  <img src='https://source.unsplash.com/collection/617562/320x300'/>
                </div>
                <div className="grid">
                  <img src='https://source.unsplash.com/collection/617562/320x300' />
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

export default Projects;
