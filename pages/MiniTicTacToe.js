import React, { useState, useEffect } from 'react';

const MiniTicTacToe = ({ onReset, onClick }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  useEffect(() => {
    if (onReset) {
      setBoard(Array(9).fill(null));
      setIsXNext(true);
    }
  }, [onReset]);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (calculateWinner(newBoard) || newBoard[index]) return;
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    onClick(index); // Notify the main board of the move
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);

  return (
    <div className="mini-board">
      {board.map((value, index) => (
        <button key={index} className="mini-square" onClick={() => handleClick(index)}>
          {value}
        </button>
      ))}
      <style jsx>{`
        .mini-board {
          display: grid;
          grid-template-columns: repeat(3, 30px);
          grid-gap: 5px;
        }
        .mini-square {
          width: 30px;
          height: 30px;
          background-color: #fff;
          border: 1px solid #000;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .mini-square:hover {
          background-color: #ffeb3b;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default MiniTicTacToe;
