import React from "react";
import useWordGame from "./hooks/useWordGame";

export default function App(){

  const {
          inputRef,
          handleChange,
          text,
          isStarted,
          timer,
          startGame,
          wordCount
        } = useWordGame()

  return(
    <div className="container">
        <h1>How fast do you type?</h1>
        <textarea 
          ref={inputRef}
          onChange={handleChange} 
          value={text}
          disabled={!isStarted}
        />
        <h4>Time remaining: {timer}</h4>
        <button 
          onClick={startGame}
          disabled={isStarted}
        >Start</button>
        <h1>Word count: {wordCount} </h1>
    </div>
  )
}