import './Key.css';
import React, {useState} from 'react';

// Component that allows the user to press a key and make a sound. 
const Key = (props) => {
    const [clicked, setClicked] = useState(false);

    // When the user press the button, component, then the audio is play and the style change for a set time period
    const playKey = () => {
        setClicked(true);
        let audio = new Audio(props.sound);
        audio.play();

        setTimeout(() => {
            setClicked(false)
        }, 500);

        props.userAction(props.letter);
    }
    return(
        <button onClick={playKey} className={clicked ?'button-style key-clicked':'button-style'}>
            <p className="text-style1">{props.letter}</p>
        </button>
    )

}

export default Key;