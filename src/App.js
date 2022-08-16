import React,{useState,useEffect} from "react";

export default function App(){
  const STARTING_TIME = 5

  const [text,setText] = useState('')
  const [timer,setTimer] = useState(STARTING_TIME)
  const [isStarted,setIsStarted] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(e){
      setText(e.target.value)
  }


  function calcWord(text){
      const wordsArr = text.trim().split(' ')
      const filteredWords = wordsArr.filter(word => word !== '')
      return filteredWords.length
  }

  function startGame(){
      setIsStarted(true)
      setTimer(STARTING_TIME)
      setText('')
      setWordCount(0)
  }

  function endGame(){
      setIsStarted(false)
      setWordCount(calcWord(text))
  }

  
  useEffect(() => {
    if(timer > 0 && isStarted){
      setTimeout(() => {
        setTimer(prevState => prevState-1)
      },1000)
    }else if(timer === 0){
       endGame()
    }
  },[timer,isStarted])

  return(
    <div className="container">
      <h1>How fast do you type?</h1>
      <textarea 
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