import React, { Component } from 'react';
import CircleSelector from './components/circleSelector/CircleSelector';
import Circles from './components/Circles/Circles';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state={
          selection: 1
        }
    }

    handleButtonSelection=e=>{
      var newSelection=parseInt(e.target.name);
      this.setState({selection:newSelection});
    }

   
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <div>

              <CircleSelector 
              selection={this.state.selection} 
              handleButtonSelection={this.handleButtonSelection}
              
              />
          </div>
          <div>

              <Circles 
              selection={this.state.selection}
              />
          </div>
              
        </main>
      </div>
    );
  }
}

export default App;
