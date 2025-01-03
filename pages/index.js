import { useState } from "react";
import confetti from "canvas-confetti";
import MiniTicTacToe from "./MiniTicTacToe";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [resetKey, setResetKey] = useState(0);
  const [canBePlayedNum, setCanBePlayedNum] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const handleCanBePlayed = (value) => {
    if (board[value] !== null) {
      setCanBePlayedNum(null);
    } else {
      setCanBePlayedNum(value);
    }
  };

  const canBePlayed = (index) => {
    if(winner) {
      return false;
    }
    return canBePlayedNum === index || canBePlayedNum === null;
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], line: [a, b, c] };
      }
    }
    return { winner: null, line: [] };
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setResetKey((prevKey) => prevKey + 1);
    setCanBePlayedNum(null);
  };

  const playClickSound = () => {
    const audio = new Audio("/click.mp3");
    audio.play();
  };

  const handleMiniBoardClick = (index) => {
    playClickSound();
    handleCanBePlayed(index);
    setIsXNext(!isXNext);
  };

  const handleMiniBoardWin = (winner, miniBoardIndex) => {
    const newBoard = [...board];
    newBoard[miniBoardIndex] = winner;
    setBoard(newBoard);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleAboutModal = () => {
    setIsAboutModalOpen(!isAboutModalOpen);
  };

  const playWinSound = () => {
    const audio = new Audio("/game-finish.mp3");
    audio.play();
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const winnerData = calculateWinner(board);
  const winner = winnerData.winner;
  const winningLine = winnerData.line;
  if (winner) {
    triggerConfetti();
    playWinSound();
  }
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board">
        {board.map((value, index) => (
          <div
            key={index}
            className={`square ${canBePlayed(index) ? "highlight" : ""} ${winningLine.includes(index) ? "winner-tile" : ""}`}
          >
            {value !== null ? (
              <span style={{ fontSize: "3rem" }}>
                <b>{value}</b>
              </span>
            ) : (
              <MiniTicTacToe
                key={resetKey}
                onClick={(miniIndex) => handleMiniBoardClick(miniIndex, index)}
                onWin={(winner) => handleMiniBoardWin(winner, index)}
                canBePlayed={canBePlayed(index)}
                isXNext={isXNext}
                setIsXNext={setIsXNext}
              />
            )}
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>
        {winner ? "Play Again" : "Reset"}
      </button>
      <button className="rules-button" onClick={toggleModal}>
        Rules
      </button>
      <button className="about-button" onClick={toggleAboutModal}>
        About Me
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Game Rules</h2>
            <ol>
              <li>
                <strong>Game Setup:</strong>
                <ul>
                  <li>
                    The game consists of a <strong>main board</strong> (3x3
                    grid) where each square is a{" "}
                    <strong>mini Tic Tac Toe board</strong>.
                  </li>
                  <li>
                    Two players: <strong>X</strong> and <strong>O</strong>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Objective:</strong>
                <p>
                  Win the <strong>main board</strong> by completing a row,
                  column, or diagonal of mini boards (3 in a row).
                </p>
              </li>
              <li>
                <strong>Gameplay:</strong>
                <ul>
                  <li>
                    <p>
                      Players take turns playing as <strong>X</strong> or{" "}
                      <strong>O</strong>.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      On your turn, play in the active{" "}
                      <strong>mini board</strong>.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Active Mini Board Rule:</strong>
                <p>
                  The square you play in within a mini board determines the{" "}
                  <strong>next mini board</strong> your opponent must play in.
                  <br />
                  <em>Example:</em> If you play in the top-left square of a mini
                  board, your opponent must play in the top-left mini board on
                  the main board.
                </p>
              </li>
              <li>
                <strong>Special Case:</strong>
                <p>
                  If the target mini board is{" "}
                  <strong>already won or full</strong>, your opponent can play
                  in any available mini board.
                </p>
              </li>
              <li>
                <strong>Winning a Mini Board:</strong>
                <p>
                  A mini board is won by completing a row, column, or diagonal
                  of <strong>X</strong> or <strong>O</strong> within that board.
                  <br />
                  The winner's symbol replaces the square in the main board.
                </p>
              </li>
              <li>
                <strong>Winning the Main Board:</strong>
                <p>
                  Win the main board by completing a row, column, or diagonal of
                  your symbol (from mini boards you've won).
                </p>
              </li>
              <li>
                <strong>Resetting the Game:</strong>
                <p>Press the "Reset Game" button to start a new game.</p>
              </li>
            </ol>
            <h3>Tips:</h3>
            <ul>
              <li>
                <strong>Think Ahead:</strong> Plan moves that force your
                opponent into tough positions.
              </li>
              <li>
                <strong>Control the Main Board:</strong> Winning mini boards
                strategically can help secure the main board.
              </li>
            </ul>
          </div>
        </div>
      )}
      {isAboutModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleAboutModal}>
              &times;
            </span>
            <h2>About Me</h2>
            <p>
              Hi, I'm <strong>Christian Bonafena</strong>, a passionate{" "}
              <strong>Full Stack Engineer</strong>.
            </p>
            <p>
              You can reach me on Telegram:{" "}
              <a
                href="https://t.me/cbonz"
                target="_blank"
                rel="noopener noreferrer"
              >
                @cbonz
              </a>
              .
            </p>
            <p>
              This game's idea is inspired by <strong>Vsauce</strong>
            </p>
          </div>
        </div>
      )}
      <style jsx>{`
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden; /* Prevent scrolling if unnecessary */
          box-sizing: border-box;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        .game {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
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
          grid-template-columns: repeat(3, minmax(100px, 1fr));
          grid-gap: 2vw;
          max-width: 90vw;
        }
        .square {
          width: auto;
          height: auto;
          padding: 10px;
          background-color: #fff;
          border: 2px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .highlight {
          background-color: yellow;
        }
        .winner-tile {
          background-color: lightgreen;
          animation: shake 0.5s infinite alternate;
        }

        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
        .strike {
          position: relative;
          overflow: hidden;
        }
        .strike::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 5px;
          background-color: red;
          transform: scaleX(0);
          transform-origin: left;
          animation: strike-animation 0.5s forwards;
        }

        @keyframes strike-animation {
          to {
            transform: scaleX(1);
          }
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
        .rules-button {
          position: absolute;
          top: 0;
          left: 30px;

          margin-top: 10px;
          padding: 10px 20px;
          background-color: #444;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .about-button {
          position: absolute;
          top: 0;
          right: 30px;

          margin-top: 10px;
          padding: 10px 20px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .modal {
          display: flex;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .modal-content {
          background-color: #fefefe;
          margin: auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
          max-width: 600px;
        }
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }
        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default TicTacToe;
