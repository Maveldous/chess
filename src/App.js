import { Component } from "react";
import './App.css';
import { Game } from './logic/game';

class App extends Component {

  state = {
    board: Array(8)
      .fill([])
      .map((row, index) => {
        const isRowEven = index % 2 === 0;

        return Array(8)
          .fill({})
          .map((section, indexSection) => {
            if(isRowEven) return indexSection % 2 === 0 ? {isBlack: true} : {isBlack: false};
            return indexSection % 2 === 0 ? {isBlack: false} : {isBlack: true};
          });
      })
  };

  render() {
    let game = new Game();

    return (
      <div className="App">
        <header className="App-header">
          <div className="chess">
            <div className="chess-board">
              { this.state.board.map(( row, index) => 
                row.map(({isBlack}, indexSection) => (
                  <div className={isBlack ? 'chess-section--black' : 'chess-section--white'} key={`${index}${indexSection}`} />
                ))
              ) }
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
