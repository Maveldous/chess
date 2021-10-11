import React from "react";

import "./section.css"

export const Section = ({
  isBlack,
  isPlaceholder,
  onChooseSection
}) => {

  const classes = [isBlack ? 'chess-section--black' : 'chess-section--white']

  if (isPlaceholder) {
    classes.push('chess-section--placeholder')
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={onChooseSection}
    />
  )
};