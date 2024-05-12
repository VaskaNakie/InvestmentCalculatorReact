import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';
import {useState} from 'react';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1600,
    expectedReturn: 12,
    duration: 10,
  });

  function handleChange(inputIdentifier, newInput) {
        
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newInput
        }
    })
  }

  const validUserInput = userInput.duration > 0 ? true : false;

  return (
    <>
      <Header/>
      <UserInput onChange={handleChange} userInput={userInput}/>      
      {validUserInput ? <Result input={userInput}/> : <p style={{textAlign: "center"}}>Please enter a DURATION greater than 0 </p>}      
    </>

  )
}

export default App
