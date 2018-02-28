import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput/UserOutput';
import UserInput from "./components/UserInput/UserInput";

class App extends Component {
  state = {
    usernames: [
      { name: 'Jess' },
      { name: 'Anai' },
      { name: 'Nat' },
    ]
  }

  switchNameHandler = (event) => {
      this.setState({
        usernames: [
        { name: 'J' },
        { name: 'Ace' },
        { name: 'Natalia' },
      ]
    })
  }

  render() {

    return <div className="App">
        <UserInput />
        <UserOutput 
          name={this.state.usernames[0].name} 
          click={this.switchNameHandler.bind (this)} />
        <UserOutput 
        name={this.state.usernames[1].name} />
        <UserOutput name={this.state.usernames[2].name} />
      </div>;
  }
};

export default App;
