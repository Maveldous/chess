import { Component } from "react";
import './App.css';
import { Game } from './logic/game';

class App extends Component {

  state = {
    board: Array(8)
      .fill([])
      .map((row, index) => {
        const isRowEven = index % 2 === 0;
        const sectionOptions = {
          isBlack: false,
          isPlaceholder: false,
        }

        return Array(8)
          .fill({})
          .map((section, indexSection) => ({
            isBlack: isRowEven 
                    ? indexSection % 2 !== 0
                    : indexSection % 2 === 0
          }));
      }),
    
    currentPremovesPositions: {x: 0, y: 0},
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
                  <div
                    className={isBlack ? 'chess-section--black' : 'chess-section--white'}
                    key={`${index}${indexSection}`}
                  />
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
