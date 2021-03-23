import React, {Component} from "react";

import Header from "./componentes/Header";

import Main from './pages/main'


class App extends Component{
  render(){
    return (
      <div className="App">
        <Header/ >
        <Main />
      </div>
    );
  }
}

export default App;
