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

// Images use to replace the current beat image when the user choose an beat 
import blankIcon from './assets/blank-icon.png';

/*Sequnece of correct letters for the correct beat */
//const record2Answers = ["A","S","D","F","G","H","J","K","L"];
const record1Answers = ["A", "A", "S", "A", "A", "S","J", "A", "A", "S", "A", "A", "S","J" ];



function App() {
  const [userActions, setUserActions] = useState([]); // Saves the user's chosen letters to be compare later to the correct sequence of letters
  const [remainingBeats, setRemainingBeats] = useState(0); // Update the count of correct beats chosen by the user
  
  const [showDanceColor, setDanceColor] = useState(0)
  const [hidePlayButtonSection, setHidePlayButton] = useState(false);
  const [getBeatIcons, setBeatIcons] = useState(blankIcon)
  const [showListenIcon, setListenIcon] = useState(true); // Displays or hides the Listen image while the user plays a beat
  const [showCorrectBeatIcon, setCorrectBeatIcon] = useState(false); //Displays or hides the Celebration image while the user plays a beat
  const [showBadBeatIcon, setBadBeatIcon] = useState(false); //Displays or hides the Bad Beat image while the user plays a beat

  
  const playRecordingOne = () => {
   let audio = new Audio(record1);
   audio.play();

   setTimeout(() => {
    setHidePlayButton(true);
    }, 9000);
  }

  
  const saveUserAction = (letter) => {
    // Save the user's beat to be matched against the recored correct beat
    setUserActions([...userActions, letter]); 

    // Update the score and image to show correct and incorrect beat chosen
    updateBeats(letter,remainingBeats, setRemainingBeats, record1Answers, setDanceColor, setBeatIcons );
  }

  return (
    <div className={`app ${showDanceColor}`}>
      <header className="header-style">
        <p>Let's play the game</p>
        <h1 className="remove-top-margin">Mimic the Beat</h1>
        <p className="instruction-section">Instructions: <span className="instruction-style">Listen</span> to the <span className="instruction-style">Beat</span>, then <span className="instruction-style">Repeat</span></p>
      </header>
      <main >
        <section className={hidePlayButtonSection?"hide-play-section": "divided-section"}>
          <article className="play-area narrative-text">
            <p>What's up junior Beat Master. Class is in session and Super-Hero Beat Master Flex is ready to teach a lesson. Mimic his beat so the party people can move their feet.</p>
          </article>
          <article className="play-area play-button-area">
            <button onClick={playRecordingOne} className="play-button"><p>Play the Beat</p></button>
          </article>
        </section>
        <section className={hidePlayButtonSection?"show-play-section": "hide-play-section"}>
          <img src={getBeatIcons} className="bad-beat-icon-style" alt="Big red x symbol" />
        </section>                
        <section className={remainingBeats < record1Answers.length?"no-divider":"hide-icon"}>
          <article className="keyboard-header-section">
            <h3>KeyBoard</h3>
            <h3>Remaining Beats: {record1Answers.length-remainingBeats}</h3>
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

        {remainingBeats === record1Answers.length &&
        <section>
          <h2>You Won</h2>
        </section>
        }
        <section><p className="icon-author">Icons by Chameleon Design, Vincent Le Moign, and Dot on Paper of https://icon-icons.com/</p></section>
      </main>
    </div>
  );
}

export default App;
