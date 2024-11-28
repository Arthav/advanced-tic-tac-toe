import { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (calculateWinner(newBoard) || newBoard[index]) return;
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
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

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board">
        {board.map((value, index) => (
          <button key={index} className="square" onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>Reset Game</button>
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .game {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: black;
          background-size: 600% 600%;
          animation: gradient 10s ease infinite;
        }
        .status {
          margin-bottom: 20px;
          font-size: 24px;
          font-weight: bold;
          color: #fff;
        }
        .board {
          display: grid;
          grid-template-columns: repeat(3, 100px);
          grid-gap: 10px;
        }
        .square {
          width: 100px;
          height: 100px;
          background-color: #fff;
          border: 2px solid #000;
          font-size: 36px;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .square:hover {
          background-color: #ffeb3b;
          transform: scale(1.1);
        }
        .reset-button {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .reset-button:hover {
          background-color: #005bb5;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default TicTacToe;
