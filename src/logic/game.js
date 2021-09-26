import { Queen } from "./figures/queen";

export class Game {
  constructor() {
    let queen = new Queen({}, {XSectionCount: 8, YSectionCount: 8});

    console.log(queen.getPremovePositions());
  }
};