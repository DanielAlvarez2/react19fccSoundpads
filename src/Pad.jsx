import {useState} from 'react'

export default function Pad(props){
    const [active,setActive] = useState(props.on)
    return(
        <button className={active ? 'on' : undefined} 
                style={{background:props.color}}
                onClick={()=>setActive(prev => !prev)}
        >{props.id}</button>
    )
}