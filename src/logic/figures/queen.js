import {Figure} from './figure';

import {getXLinePositions, getYLinePositions, getRightDiagonalPositions, getLeftDiagonalPositions} from '../../helpers/positions';

export class Queen extends Figure {

  constructor(figureInfo, boardInfo) {
    super({
      name: 'Queen',
      img: '',
      value: 9,
      currentPosition: {x: 0, y: 0},
      ...figureInfo,
    },
    boardInfo);
  }

  getPremovePositions({x, y}) {
    const positions = [
      getXLinePositions({lineSectionsCount: this.XSectionCount, y}),
      getYLinePositions({lineSectionsCount: this.YSectionCount, x}),
      getRightDiagonalPositions({YSectionCount: this.YSectionCount, XSectionCount: this.XSectionCount, x, y}),
      getLeftDiagonalPositions({YSectionCount: this.YSectionCount, XSectionCount: this.XSectionCount, x, y}),
    ];

    return positions.flat().filter(pos => !(pos.x === x && pos.y === y));
  }
};