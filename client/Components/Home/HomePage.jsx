import React from 'react';
import Header from './Header/Header.jsx';
import Card from './Card/Card.jsx';
import axios from 'axios';


class HomePage extends React.Component {
  constructor() {
      super();
      this.state = {
        gifs: []
      };
    }
    componentDidMount() {
      axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=shakira&api_key=af35042293d040f030ebf1b07911b600&format=json')
        .then(response => {
          this.setState({
            gifs: response.data.topalbums.album[1].name
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
        <div>
          <Header />
          <Card   />
        </div>
      </div>
    );
  }

}

export default HomePage;
