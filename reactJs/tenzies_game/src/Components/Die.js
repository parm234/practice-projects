import Dots from "./Dot"

export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    let dots =[] 
        for(let i =0;i<props.value;i++)
        {
            dots.push(<Dots/>)
        }
    
    return (
        <div className="die--face" 
            style={styles}
            onClick={props.holdDice}
        >
            {dots}
        </div>
    )
}