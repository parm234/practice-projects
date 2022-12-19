import { useState } from "react";
import Die from "./Components/Die";
import { nanoid } from 'nanoid'

function App() {
  const [dice,setDice] = useState(allNewDice())
  
 
  // roll button re-generating random numbers
  function rollDice(){
    setDice(oldDice => oldDice.map(die =>{
      return die.isHeld ? die : {...die, value:Math.ceil(Math.random()*6)}
    }))
  }

  // return an array of objects with random 
  //numbers generated on 10 dices
  function allNewDice(){
    const newDice = []

    for(let i=0;i<10;i++){
      const randomValue = Math.ceil(Math.random()*6)
      newDice.push(
        {
          value: randomValue,
          isHeld: false,
          id: nanoid()
        })
    }
    
    return newDice
  }

  function holdDice(id){
    setDice(oldDice => oldDice.map(die => {
      return  die.id===id ?  {...die, isHeld: !die.isHeld}: die
    }))
  }

  

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)

  return (
    <main className="app--main">
      <div className="dice--container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App;
