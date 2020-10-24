import './Key.css';
import React, {useState} from 'react';

const Key = (props) => {
    const [clicked, setClicked] = useState(false);

    const playKey = () => {
        setClicked(true);
    }
    return(
        <button onClick={playKey} className={clicked ?'button-style key-clicked':'button-style'}>
            <p className="text-style1">{props.letter}</p>
        </button>
    )

}

export default Key;