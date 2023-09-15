import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [usrChoice, setUsrChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)

  useEffect(() => {
    if (usrChoice !== null) {
      computerChoiceGen();
    }
  }, [usrChoice]);

  useEffect(() => {
    checkWinner()
  }, [computerChoice, usrChoice])

  function handleClick(value){
    setUsrChoice(value)
    computerChoiceGen()
  }
  function computerChoiceGen(){
    const randomNum = Math.random();
  
    if (usrChoice === 'rock') {
      // When the user chooses rock, there is a 75% chance that the computer wins.
      if (randomNum <= 0.75) {
        setComputerChoice('paper'); // Computer selects paper
      } else {
        // With the remaining 25% chance, the computer makes a random selection
        const computer = Math.ceil(Math.random() * 3);
  
        if(computer === 1)
          setComputerChoice('rock');
        else if(computer === 2)
          setComputerChoice('paper');
        else if(computer === 3)
          setComputerChoice('scissors');
      }
    } else if (usrChoice === 'paper') {
      // When the user chooses paper, there is a 75% chance that the computer wins.
      if (randomNum <= 0.75) {
        setComputerChoice('scissors'); // Computer selects scissors
      } else {
        // With the remaining 25% chance, the computer makes a random selection
        const computer = Math.ceil(Math.random() * 3);
  
        if(computer === 1)
          setComputerChoice('rock');
        else if(computer === 2)
          setComputerChoice('paper');
        else if(computer === 3)
          setComputerChoice('scissors');
      }
    } else if (usrChoice === 'scissors') {
      // When the user chooses scissors, there is a 75% chance that the computer wins.
      if (randomNum <= 0.75) {
        setComputerChoice('rock'); // Computer selects rock
      } else {
        // With the remaining 25% chance, the computer makes a random selection
        const computer = Math.ceil(Math.random() * 3);
  
        if(computer === 1)
          setComputerChoice('rock');
        else if(computer === 2)
          setComputerChoice('paper');
        else if(computer === 3)
          setComputerChoice('scissors');
      }
    }
  }
  
  function checkWinner(){
    if (usrChoice){
    switch(usrChoice + computerChoice){
      case 'rockscissors':
      case 'scissorspaper':
      case 'paperrock':
        setResult('User wins')
        break;
      case 'scissorsrock':
      case 'paperscissors':
      case 'rockpaper':
        setResult('Computer wins')
        break;
      default:
        setResult('Draw!')
        break;
    }}
  }
  return (
    <div className="App">
      <div className='game-board'>
        <h1>User choice is: {usrChoice}</h1>
      
        <h1>Computer choice is: {computerChoice}</h1>
        <p>{result}</p> 
        <div className='btn-container'>
          <button onClick={() => handleClick('rock')}>Rock</button>
          <button onClick={() => handleClick('paper')}>Paper</button>
          <button onClick={() => handleClick('scissors')}>Scissors</button> 
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
