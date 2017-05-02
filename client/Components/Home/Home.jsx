import React from 'react';
import Header from '../Header/Header.jsx';
import Menu from '../Menu/Menu.jsx';
import Grid from '../Grid/Grid.jsx';
import BlackBlock from '../BlackBlock/BlackBlock.jsx';
import data from '../../Data.js';

class Home extends React.Component {
  constructor(){
    super();
    const index= Math.floor(Math.random() * 3);
    this.quote= data.quotes[index];
    console.log(this.index);

  }
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Grid />
        <BlackBlock id={this.quote.id} author={this.quote.author} quote={this.quote.quote} />
      </div>
    );
  }

}

export default Home;
