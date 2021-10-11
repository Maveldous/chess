import { Queen } from "./figures/queen";

export class Game {
  constructor() {
    this.queen = new Queen({}, {XSectionCount: 8, YSectionCount: 8});

    // console.log(queen.getPremovePositions());
  }

  getPremoves(coordinates) {
    return this.queen.getPremovePositions(coordinates)
  }
};