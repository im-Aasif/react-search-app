import { useState } from 'react';
import './CountButton.css';

const CountButton = (props) => {
    const incrementBy = props.incrementBy ? props.incrementBy : 1;
    const [counter, setCounter] = useState(0);
    const onCounterClick = () => {
        setCounter(counter + parseInt(incrementBy));
    }
    const buttonStyle = {
        "width": "100px",
        "height": "2em",
        "background-color": props.bgColor,
        "color": props.txtColor,
        "border-radius": "2px",
        "border": "1px sienna solid"
    }
    return (
        <div>
            <button onClick={onCounterClick} style={buttonStyle}>+ {incrementBy}</button>
            <p>{counter}</p>
        </div>
    )
}

export default CountButton;
