import {useState,useRef,useEffect} from 'react'

function useWordGame(){
    const STARTING_TIME = 5

    const [text,setText] = useState('')
    const [timer,setTimer] = useState(STARTING_TIME)
    const [isStarted,setIsStarted] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const inputRef = useRef(null)
  
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
        inputRef.current.disabled = false
        inputRef.current.focus()
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

    return {inputRef,handleChange,text,isStarted,timer,startGame,wordCount}
}
export default useWordGame