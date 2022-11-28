import { useState } from "react";

export const useTicTacToe = (size) => {
  const createBoard = (size) => {
    let boardSize = size;
    if (size === 1 || size === 2) {
      boardSize = 3;
    }

    let board = [];

    for (let i = 0; i < boardSize; i++) {
      board.push([]);
      for (let j = 0; j < boardSize; j++) {
        board[i].push(0);
      }
    }
    return board;
  };

  const [tickTacToe, setTickTacToe] = useState(createBoard(size));

  const updateTicTacToe = (tickTacToeBoard) => {
    setTickTacToe(tickTacToeBoard);
  };

  const checkColumn = (tickTacToe, valueToCheck, col) => {
    let counter = 0;
    let size = tickTacToe.length;
    for (let k = 0; k < size; k++) {
      if (tickTacToe[k][col] === valueToCheck) {
        counter++;
      } else {
        return false;
      } // Column Check
    }
    if (size === counter) {
      return true;
    }
  };

  const checkRow = (tickTacToe, valueToCheck, row) => {
    let counter = 0;
    let size = tickTacToe.length;
    for (let k = 0; k < size; k++) {
      if (tickTacToe[row][k] === valueToCheck) {
        counter++;
      } else {
        return false;
      } // Column Check
    }
    if (size === counter) {
      return true;
    }
  };

  const checkMinorColumn = (tickTacToe, valueToCheck) => {
    let counter = 0;
    let size = tickTacToe.length;

    for (let k = 0; k < size; k++) {
      if (tickTacToe[k][size - 1 - k] === valueToCheck) {
        counter++;
      } else {
        return false;
      }
    } // Minor Column Check

    if (size === counter) {
      return true;
    }
  };

  const checkMajorColumnn = (tickTacToe, valueToCheck) => {
    let counter = 0;
    let size = tickTacToe.length;

    for (let k = 0; k < size; k++) {
      if (tickTacToe[k][k] === valueToCheck) {
        counter++;
      } else {
        return false;
      }
    } // Minor Column Check

    if (size === counter) {
      return true;
    }
  };

  const isWinner = (i, j, tickTacToe, valueToCheck) => {
    return (
      checkColumn(tickTacToe, valueToCheck, j) ||
      checkRow(tickTacToe, valueToCheck, i) ||
      checkMinorColumn(tickTacToe, valueToCheck) ||
      checkMajorColumnn(tickTacToe, valueToCheck)
    );
  };

  const reset = () => {
    setTickTacToe(createBoard(3));
  };

  return { tickTacToe, updateTicTacToe, isWinner, reset };
};
