import React from 'react';
import Header from "./Components/Header/Header.jsx";
import Menu from './Components/Menu/Menu.jsx';
import Grid from './Components/Grid/Grid.jsx';
import BlackBlock from './Components/BlackBlock/BlackBlock.jsx';
import "./index.scss";
import data from './Data.js';


class App extends React.Component {
    constructor(){
      super();
      const index= Math.floor(Math.random() * 3);
      this.quote= data.quotes[index];
      console.log(this.index);

  }

render() {
      return (
        <div>
          <Header/>
          <Menu />
          <Grid />
          <BlackBlock id={this.quote.id} author={this.quote.author} quote={this.quote.quote} />
        </div>
      );
    }
  }

export default App;
