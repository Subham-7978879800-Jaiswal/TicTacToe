import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
        board[i].push({ id: uuidv4(), value: 0 });
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
      if (tickTacToe[k][col].value === valueToCheck) {
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
      if (tickTacToe[row][k].value === valueToCheck) {
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
      if (tickTacToe[k][size - 1 - k].value === valueToCheck) {
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
      if (tickTacToe[k][k].value === valueToCheck) {
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
  const isGameOver = (tickTacToe) => {
    for (let i = 0; i < tickTacToe.length; i++) {
      for (let j = 0; j < tickTacToe[i].length; j++) {
        if (tickTacToe[i][j].value === 0) {
          return false;
        }
      }
    }
    return true;
  };

  const reset = () => {
    setTickTacToe(createBoard(3));
  };

  return { tickTacToe, updateTicTacToe, isWinner, reset, isGameOver };
};
