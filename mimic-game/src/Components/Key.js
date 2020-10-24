import './Key.css';

const Key = (props) => {
    return(
        <button className="button-style">
            <p className="text-style1">{props.letter}</p>
        </button>
    )

}

export default Key;