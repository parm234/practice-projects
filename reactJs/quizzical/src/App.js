import {useState} from 'react'
import Quiz from './Components/Quiz'
import LandingPage from './Components/LandingPage'

function App() {
  const [start, setStart] = useState(false)
  return (
    <>
      {start ? <Quiz/> : <LandingPage/>}
    </>
  );
}

export default App;
