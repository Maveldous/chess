export const getXLinePositions = ({lineSectionsCount, y}) => 
  Array(lineSectionsCount)
    .fill(0)
    .map((item, index) => ({x: index, y}));

export const getYLinePositions = ({lineSectionsCount, x}) => 
    Array(lineSectionsCount)
      .fill(0)
      .map((item, index) => ({y: index, x}));

export const getRightDiagonalPositions = ({YSectionCount, XSectionCount, x, y}) => {
  const positions = [];
  let startedX = x, startedY = y;

  while (startedX !== 0 && startedY !== YSectionCount) {
    startedX--;
    startedY++;
  }

  while (startedX !== XSectionCount && startedY !== -1) {
    positions.push({x: startedX, y: startedY});

    startedX++;
    startedY--;
  }

  return positions;
}


export const getLeftDiagonalPositions = ({YSectionCount, XSectionCount, x, y}) => {
    const positions = [];
    let startedX = x - y, startedY = 0;

    if(x < y) {
      startedX = 0;
      startedY = y - x;
    }

    while (startedX !== XSectionCount && startedY !== YSectionCount) {
      positions.push({x: startedX, y: startedY});

      startedX++;
      startedY++;
    }

    return positions;
}