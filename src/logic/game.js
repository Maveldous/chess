import { Queen } from "./figures/queen";

export class Game {
  constructor() {
    this.queen = new Queen({});

    // console.log(queen.getPremovePositions());
  }

  getPremoves(coordinates) {
    return this.queen.getPremovePositions(coordinates)
  }
};