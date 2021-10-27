export class Figure {
  name;
  img;
  value;
  currentPosition;

  constructor(figure) {
    this.figure = figure;
  }

  set figure({name, img, moveAbility, value, currentPosition}) {
    this.name = name;
    this.img = img;
    this.moveAbility = moveAbility;
    this.value = value;
    this.currentPosition = currentPosition;
  }

  get figure() {
    return {
      name: this.name,
      img: this.img,
      moveAbility: this.moveAbility,
      value: this.value,
      currentPosition: this.currentPosition,
    };
  }

  move(position) {
    this.currentPosition = position;
  }
}