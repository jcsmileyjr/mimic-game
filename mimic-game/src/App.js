import './App.css';
import React, {useState} from 'react';
import Key from './Components/Key';
import {updateBeats} from './js/functions';

/*Sounds use as beats when the user click a button */
import sound1 from './assets/boom.wav';
import sound2 from './assets/clap.wav';
import sound3 from './assets/kick.wav';
import sound4 from './assets/openhat.wav';
import sound5 from './assets/ride.wav';
import sound6 from './assets/snare.wav';
import sound7 from './assets/tink.wav';
import sound8 from './assets/tom.wav';
import sound9 from './assets/hihat.wav';
import record1 from './assets/beat-1-A.webm';

/*Images use to replace the listen image when the user choose an correct or incorrect beat */
import badBeatIcon from './assets/wrongBeat.png';
import celebration from './assets/celebration.png';

/*Sequnece of correct letters for the correct beat */
const record1Answers = ["A","S","D","F","G","H","J","K","L"];



function App() {
  const [userActions, setUserActions] = useState([]); // Saves the user's chosen letters to be compare later to the correct sequence of letters
  const [remainingBeats, setRemainingBeats] = useState(0); // Update the count of correct beats chosen by the user
  
  
  const [showListenIcon, setListenIcon] = useState(true); // Displays or hides the Listen image while the user plays a beat
  const [showCorrectBeatIcon, setCorrectBeatIcon] = useState(false); //Displays or hides the Celebration image while the user plays a beat
  const [showBadBeatIcon, setBadBeatIcon] = useState(false); //Displays or hides the Bad Beat image while the user plays a beat

 
  const playRecordingOne = () => {
   let audio = new Audio(record1);
   audio.play();
  }

  
  const saveUserAction = (letter) => {
    // Save the user's beat to be matched against the recored correct beat
    setUserActions([...userActions, letter]); 

    // Update the score and image to show correct and incorrect beat chosen
    updateBeats(letter,remainingBeats, setRemainingBeats, record1Answers, setListenIcon,setCorrectBeatIcon, setBadBeatIcon );
  }

  return (
    <div className="App">
      <header className="header-style">
        <p>Let's play the game</p>
        <h1 className="remove-top-margin">Mimic the Beat</h1>
        <p className="instruction-section">Instructions: <span className="instruction-style">Listen</span> to the <span className="instruction-style">Beat</span>, then <span className="instruction-style">Repeat</span></p>
      </header>
      <main>        
        <section className="divided-section">
          <article className="play-area narrative-text">
            <p>What's up junior Beat Master. Class is in session and Super-Hero Beat Master Flex is ready to teach a lesson. Mimic his beat so the party people can move their feet.</p>
          </article>
          <article className="play-area play-button-area">
            <button onClick={playRecordingOne} className="play-button"><p>Play the Beat</p></button>
          </article>
        </section>                
        <section className={remainingBeats < 9?"no-divider":"hide-icon"}>
          <article className="keyboard-header-section">
            <h3>KeyBoard</h3>
            <h3>Remaining Beats: {9-remainingBeats}</h3>
          </article>          
          <article>
            <Key letter="A" sound={sound1} userAction={saveUserAction}/>
            <Key letter="S" sound={sound2} userAction={saveUserAction}/>
            <Key letter="D" sound={sound3} userAction={saveUserAction}/>
            <Key letter="F" sound={sound4} userAction={saveUserAction}/>
            <Key letter="G" sound={sound5} userAction={saveUserAction}/>
          </article>
          <article className="space-between-key-group">
            <Key letter="H" sound={sound6} userAction={saveUserAction}/>
            <Key letter="J" sound={sound7} userAction={saveUserAction}/>
            <Key letter="K" sound={sound8} userAction={saveUserAction}/>
            <Key letter="L" sound={sound9} userAction={saveUserAction}/>
          </article>
        </section>

        {remainingBeats === 9 &&
        <section>
          <h2>You Won</h2>
        </section>
        }

      </main>
    </div>
  );
}

export default App;
