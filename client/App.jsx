import React from 'react';
import Header from "./Components/Header/Header.jsx";
import Grid from './Components/Grid/Grid.jsx';
import Menu from './Components/Menu/Menu.jsx';
import "./index.scss";





class App extends React.Component {

  render() {
  

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
