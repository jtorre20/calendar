import React, { Component } from 'react';
import Calendar from './components/Calendar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <div id="logo">
          <span className="icon"></span>
          <div>
            <b>Calendar</b>
          </div>
         </div>
        </header>

        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
