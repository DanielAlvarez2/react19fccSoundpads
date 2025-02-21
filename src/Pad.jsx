export default function Pad(props){
    return(
        <button className={props.on ? 'on' : undefined} style={{background:props.color}}>{props.id}</button>
    )
}