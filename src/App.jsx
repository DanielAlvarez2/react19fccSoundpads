import pads from './pads'
import './App.css'
import {useState} from 'react' 

function App() {
  const [pad, setPad] = useState([pads])
  return (
    <main>
      <div className='pad-container'>
        test
      </div>
    </main>
  )
}

export default App
