import { Component } from "react";
import './App.css';
import { Game } from './logic/game';

import { cloneObject } from "./helpers/utils";

import Section from "./components/section";

const game = new Game();

class App extends Component {

  state = {
    board: Array(8)
      .fill([])
      .map((row, index) => {
        const isRowEven = index % 2 === 0;

        return Array(8)
          .fill({})
          .map((section, indexSection) => ({
            isBlack: isRowEven 
                    ? indexSection % 2 !== 0
                    : indexSection % 2 === 0,
            isPlaceholder: false,
          }));
      }),
    
    currentPremovesPositions: [{x: 0, y: 0}],
  };

  chooseSection = (param) => {
    this.setState({
      currentPremovesPositions: game.getPremoves(param),
    })
  };

  render() {

    let boardInfo = cloneObject(this.state.board);

    this.state.currentPremovesPositions.forEach(({x, y}) => {
      boardInfo[x][y] = {...boardInfo[x][y], isPlaceholder: true};
    });

    return (
      <div className="App">
        <header className="App-header">
          <div className="chess">
            <div className="chess-board">
              { boardInfo.map(( row, indexRow) => 
                row.map(({isBlack, isPlaceholder}, indexCol) => (
                  <Section
                    key={`${indexRow}${indexCol}`}
                    isBlack={isBlack}
                    isPlaceholder={isPlaceholder}
                    onChooseSection={() => this.chooseSection({x: indexRow, y: indexCol})}
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
