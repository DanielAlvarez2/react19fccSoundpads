import padsData from './pads'
import './App.css'
import {useState} from 'react' 

function App(props) {
  console.log(padsData)
  const [pads, setPads] = useState(padsData)
  return (
    <main style={{background:props.darkMode ? 'black' : 'white'}}>
      <div className='pad-container'>
        {pads.map(pad=>(
          <button style={{background:pad.color}} key={pad.id}>{pad.id}</button>
        ))}
      </div>
    </main>
  )
}

export default App
