import { useState } from "react";
import { useTicTacToe } from "./useTicTacToe";
import { Box } from "./Box";

export const TickTacToe = () => {
  const { tickTacToe, updateTicTacToe, isWinner, reset, isGameOver } =
    useTicTacToe(3);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    reset();
    setPlayer(1);
    setWinner(false);
    setGameOver(false);
  };

  const onClickBox = (posi, posj) => {
    const newTickTacToeBoard = [...tickTacToe];
    newTickTacToeBoard[posi][posj].value = player;
    const winner = isWinner(posi, posj, newTickTacToeBoard, player);
    const gameOver = isGameOver(newTickTacToeBoard);

    if (winner) {
      setWinner(winner);
      return;
    }

    if (gameOver) {
      setGameOver(true);
      return;
    }
    player === 1 ? setPlayer(2) : setPlayer(1);
    updateTicTacToe(newTickTacToeBoard);
  };

  const createBoard = (tickTacToe) => {
    return (
      <>
        {tickTacToe.map((tickTacToeRow, i) => {
          return (
            <div key={i} style={{ height: 100 }}>
              {tickTacToeRow.map((el, j) => (
                <Box
                  key={el.id}
                  onClickBox={onClickBox}
                  value={el.value}
                  i={i}
                  j={j}
                ></Box>
              ))}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      {createBoard(tickTacToe)}
      {winner && (
        <>
          <p>player {player} won</p>
          <button onClick={resetGame}>OK</button>
        </>
      )}
      {gameOver && (
        <>
          <p>Draw</p>
          <button onClick={resetGame}>Play Again</button>
        </>
      )}
      <p>
        player 1 has <span style={{ color: "red" }}>X</span>
      </p>
      <p>
        player 2 has <span style={{ color: "pink" }}>O</span>
      </p>
      <p>player {player} Turn</p>
    </>
  );
};
