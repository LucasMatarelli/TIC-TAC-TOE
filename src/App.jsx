import React, { useState } from 'react';

function Square({ value, onClick }) {
  return (
    <button style={{
      width: 60, 
      height: 60, 
      fontSize: 24,
      cursor: 'pointer',
      border: '2px solid #333',
      backgroundColor: '#fff',
      margin: 2,
      borderRadius: 5
    }} onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const renderSquare = i => (
    <Square value={squares[i]} onClick={() => handleClick(i)} />
  );

  return (
    <div style={{
      display: 'inline-block',
      border: '3px solid #333',
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#f0f0f0'
    }}>
      <div style={{ display: 'flex' }}>
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div style={{ display: 'flex' }}>
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div>
      <div style={{ display: 'flex' }}>
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#282c34',
      color: '#61dafb',
      userSelect: 'none'
    }}>
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
}
