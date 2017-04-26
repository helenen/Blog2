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
      this.state={

      };
    }
render() {
  return (
    <div>
      <Header/>
      <Menu />
      <Grid />
      <div>
          {data.quotes.map((e, index)=> {
              return(
              <BlackBlock id={e.id} author={e.author} quote={e.quote} key={index} />
          )
      })}
    </div>
    </div>
  );
}
}
export default App;
