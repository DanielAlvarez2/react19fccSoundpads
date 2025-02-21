import padsData from './pads'
import './App.css'
import {useState} from 'react' 
import Pad from './Pad.jsx'

function App(props) {
  console.log(padsData)
  const [pads, setPads] = useState(padsData)
  return (
    <main style={{background:props.darkMode ? 'black' : 'white'}}>
      <div className='pad-container'>
        {pads.map(pad=>(
          <Pad  key={pad.id} 
                color={pad.color} 
                id={pad.id} 
                on={pad.on}
          />
        ))}
      </div>
    </main>
  )
}

export default App
