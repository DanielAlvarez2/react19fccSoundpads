import padsData from './pads'
import './App.css'
import {useState} from 'react' 

function App() {
  console.log(padsData)
  const [pads, setPads] = useState(padsData)
  return (
    <main>
      <div className='pad-container'>
        {pads.map(pad=>(
          <button key={pad.id}>{pad.id}</button>
        ))}
      </div>
    </main>
  )
}

export default App
