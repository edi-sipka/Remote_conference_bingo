import React from 'react';
import classNames from 'classnames';

function Square({ id, description, checked,  squareChecked, finishedGame, completedSquares }) {
  const targetId = +id;

  const squareBox = classNames('square', {
    'checked-square': squareChecked.includes(targetId),
    'bingo': completedSquares.includes(targetId) && id !== '12',
  });

  const allSquareBoxesStyle = classNames('square', 'bingo', 'end-game');

  if (finishedGame) {
    return <div className={allSquareBoxesStyle}></div>;
  }

  if (id === '12') {
    return (
      <div className="square square-center">
        <p>Remote Conference Bingo</p>
      </div>
    );
  }

  return (
    <div className={squareBox} onClick={checked}>
      {description}
    </div>
  );
}

export default Square;
