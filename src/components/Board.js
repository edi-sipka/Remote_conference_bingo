import React, { useState, useEffect } from 'react';
import shuffle from 'shuffle-array';
import Square from './Square';
import Header from './Header';
import Popup from './Popup';
import LottieAnimation from './LottieAnimation'
import Animation from './Animation';


const Board = ({ cards, combination }) => {
  const [square, setSquare] = useState({});
  const [chosenSquares, setChosenSquare] = useState([12]);
  const [completedSquares, setCompletedSquares] = useState([]);
  const [winningCombination, setWinningCombination] = useState(combination);
  const [scoreBingo, setScoreBingo] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);


  //useEffect to check win, if the length is below 4 there is no win, and if there is winning combination animation will show and it will update completedSquares and winningCombination.
  useEffect(() => {
    const checkWin = (chosenSquares) => {
      if (chosenSquares.length <= 4) return false;
      const newWinningCombinations = [...winningCombination];
      for (let i = 0; i < newWinningCombinations.length; i++) {
        const winPossibility = newWinningCombinations[i];
        let matchCount = 0;
        for (let j = 0; j < chosenSquares.length; j++) {
          if (winPossibility.includes(chosenSquares[j])) {
            matchCount++;
          }
        }
        if (matchCount > 4) {
          const addToCompletedSquares = completedSquares.concat(winPossibility);
          setCompletedSquares(addToCompletedSquares);
          setScoreBingo((prevCount) => prevCount + 1);
          newWinningCombinations.splice(i, 1);
          setWinningCombination(newWinningCombinations);
          setShowAnimation(true);
          setTimeout(() => {
            setShowAnimation(false);
          }, 3500);
          return true;
        }
      }
      return false;
    };
    checkWin(chosenSquares);
  }, [chosenSquares, completedSquares, winningCombination]);

// Called when a user selects a square on the game board.
  const selectCard = (id) => {
    if (chosenSquares.includes(Number(id))) return null;
    setChosenSquare([...chosenSquares, Number(id)]);
  };

// Randomly set cards from data
  useEffect(() => {
    selectCard(12);
    const shuffledCards = shuffle(cards);
    const selectedCards = shuffledCards.slice(0, 25);
    const data = selectedCards.reduce(
      (data, value, index) => ({ ...data, [index]: value }),
      {}
    );
    setSquare(data);
  }, []);

// If all squares are checked display Popup component
  if (chosenSquares.length > 24) {
    return (
      <div>
        <Popup selectedSquares={chosenSquares} />
      </div>
    )
  }

  return (
    <div className="main-container">
        {showAnimation && 
          <div className="lottie">
        <LottieAnimation/>
    </div>
      }
    <Header scoreBingo={scoreBingo} />
      <main className="board">
        {Object.keys(square).map((key) => (
          <Square
            key={key}
            id={key}
            description={square[key]}
            squareChecked={chosenSquares}
            checked={(e) => {
              e.preventDefault();
              selectCard(key);
            }}
            completedSquares={completedSquares}
          />
        ))}
      </main>
    </div>
  );
};

export default Board;
