import React from 'react';
import Header from "./Components/Header/Header.jsx";
import Menu from './Components/Menu/Menu.jsx';
import Grid from './Components/Grid/Grid.jsx';
import BlackBlock from './Components/BlackBlock/BlackBlock.jsx';
import "./index.scss";





class App extends React.Component {

  render() {


    return (
     <div >
       <Header/>
       <Menu />
       <Grid />
       <BlackBlock />
      </div>
    );
  }
}

export default App;
