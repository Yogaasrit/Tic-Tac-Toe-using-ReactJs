import React, { useState } from 'react'
import Square from '../Square/Square'

const Board = () => {
  const initialMoves = [
    null,null,null,
    null,null,null,
    null,null,null
  ]
  function calculateWinner(moves)
  {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for(let line of lines)
    {
      const[a,b,c] = line;
      if(moves[a] && moves[a]=== moves[b] && moves[a] === moves[c])
      {
        return moves[a];
      }
    }
    return null;
  }
  
  // const initialMoves = Array(9).fill(null);
  const[moves,setMoves] = useState(initialMoves);
  const[player,setPlayer] = useState(true);
  const handleClickEvent = (i) => {
   // 1. Make a copy of square state array
    const newMoves = [...moves];

    const winnerDeclared = Boolean(calculateWinner(newMoves));
    const squarefilled = Boolean(newMoves[i]);
    if(winnerDeclared || squarefilled)
    {
      return;
    }
   // 2. Mutate the copy, setting the i-th element to 'X
    newMoves[i] = player ? 'X' : 'O';
   // 3. Call the setSquares function with the mutated copy
   setMoves(newMoves);
   setPlayer(!player);
  }
  const renderSquare = (i) =>{
    return (
      <Square value = {moves[i]}
      onClickEvent = {()=>handleClickEvent(i)}
      />
    )
  }
  const winner = calculateWinner(moves);
  const status = winner ? 'Winner' : player ? 'X' : 'O';
  return (
    <div className='board-styles'>
      Board
      <div className='board-row-styles'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row-styles'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row-styles'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>  
      {status==='Winner' ? (<div>Winner</div>):(<div>Next Player : {status}</div>)}
    </div>
  )
}

export default Board