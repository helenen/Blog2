import React from 'react';
import Header from "./Components/Header/Header.jsx";
import Grid from './Components/Grid/Grid.jsx';
import Menu from './Components/Menu/Menu.jsx';
import "./index.scss";
import axios from 'axios';




class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        gifs: []
      };
    }

    componentDidMount() {
      axios.get('https://unsplash.it/list')
        .then(response => {
          this.setState({
            gifs: response.data.format
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
  render() {
    console.log(this.state.gifs);
    return (
     <div >
       <Header/>
       <Menu />
       <Grid />
      </div>
    );
  }
}

export default App;
