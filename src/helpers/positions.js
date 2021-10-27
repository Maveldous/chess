export const getXLinePositions = ({lineSectionsCount = 8, y}) => 
  Array(lineSectionsCount)
    .fill(0)
    .map((item, index) => ({x: index, y}));

export const getYLinePositions = ({lineSectionsCount = 8, x}) => 
    Array(lineSectionsCount)
      .fill(0)
      .map((item, index) => ({y: index, x}));

export const getRightDiagonalPositions = ({x, y}) => {
  const YSectionCount = 8, XSectionCount = 8; 
  const positions = [];
  let startedX = x - (YSectionCount - y - 1), startedY = YSectionCount - 1;

  if(x < YSectionCount - y - 1) {
    startedX = 0;
    startedY = y + x;
  }

  while (startedX !== XSectionCount && startedY !== -1) {
    positions.push({x: startedX, y: startedY});

    startedX++;
    startedY--;
  }

  return positions;
}


export const getLeftDiagonalPositions = ({x, y}) => {
    const YSectionCount = 8, XSectionCount = 8; 
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