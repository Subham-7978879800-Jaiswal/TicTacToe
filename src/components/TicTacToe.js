import { useState } from "react";
import { useTicTacToe } from "./useTicTacToe";
import { Box } from "./Box";

export const TickTacToe = () => {
  const { tickTacToe, updateTicTacToe, isWinner, reset } = useTicTacToe(3);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(false);

  const resetGame = () => {
    reset();
    setPlayer(1);
    setWinner(false);
  };

  const onClickBox = (posi, posj) => {
    const newTickTacToeBoard = [...tickTacToe];
    newTickTacToeBoard[posi][posj] = player;
    const winner = isWinner(posi, posj, newTickTacToeBoard, player);

    if (winner) {
      setWinner(winner);
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
            <div style={{ height: 100 }} key={Math.random() * i}>
              {tickTacToeRow.map((el, j) => (
                <Box
                  key={Math.random() * j}
                  onClickBox={onClickBox}
                  value={el}
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
      <p>
        player 1 has <span style={{ color: "red" }}>X</span>
      </p>
      <p>
        player 2 has <span style={{ color: "pink" }}>O</span>
      </p>
    </>
  );
};
