import { useState } from "react";
import Die from "./Components/Die";


function App() {
  const [dice,setDice] = useState(allNewDice())
  // roll button re-generating random numbers
  function rollDice(){
    setDice(allNewDice())
  }
console.log(dice)
  // return an object newDice with random numbers generated on 10 dices
  function allNewDice(){
    const newDice = []

    for(let i=0;i<10;i++){
      const randomValue = Math.ceil(Math.random()*6)
      newDice.push(
        {
          value: randomValue,
          isHeld: false
        })
    }
    return newDice
  }

  

  const diceElements = dice.map((die,index) => <Die key={index} value={die.value}/>)

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
