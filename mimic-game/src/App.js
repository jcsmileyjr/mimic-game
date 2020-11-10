import './App.css';
import React, {useState} from 'react';
import Key from './Components/Key';
import ImageGallary from './Components/ImageGallary.js';
import {updateBeats, updateAnimationByKey} from './js/functions';

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
  const [showPrimaryColor, setPrimaryColor] = useState(true); // Update title and instructions color when user press the beat
  const [showDanceColor, setDanceColor] = useState(0) //Update the background color when the user press a beat
  const [hidePlayButtonSection, setHidePlayButton] = useState(false); // After user gets the instructions and dance beat, hide the area
  const [getBeatIcons, setBeatIcons] = useState(blankIcon) // Updates a dance beat image while the user plays a beat
  const [startRecording, setRecording] = useState(false);


  //Start recording all beats created by the user by clearing current recorded beats
  const recordFreeStyleBeats = () => {
    setUserActions([]); // Clear recorded beats
    setRecording(true); // Hide the remaining beats for free-style
    setRemainingBeats(0); // Reset game-play beat count
    setHidePlayButton(true)
  }

  // Plays the first recording the  user suppose to mimic
  const playRecordingOne = () => {
   let audio = new Audio(record1);
   audio.play();

   setTimeout(() => {
    setHidePlayButton(true);
    }, 9000);
  }
  
  const saveUserAction = (letter) => {
    // Hide play button area if user press a beat button
    setHidePlayButton(true);

    // Save the user's beat to be matched against the recored correct beat
    setUserActions([...userActions, letter]); 

    // Update the score and image to show correct and incorrect beat chosen
    updateBeats(letter,remainingBeats, setRemainingBeats, record1Answers, setDanceColor, setBeatIcons, setPrimaryColor );
  }

  // Play back the user free style play
  function play(){
    const freeStyleMode = true;
    userActions.forEach((letter, key) => {
      setTimeout(() => {
        updateAnimationByKey(letter, setDanceColor, setBeatIcons, setPrimaryColor, freeStyleMode)
      }, 1000 *key )
    });
  }
  
  return (
    <div className={`app ${showDanceColor}`}>
      <header className="header-style">
        <ImageGallary />
        <h1 className={showPrimaryColor?"remove-top-margin primary-color":"remove-top-margin secondary-color"}>Mimic the Beat</h1>
        <p className={showPrimaryColor?"instruction-section":"instruction-section constrast-black-color"}>Instructions: 
          <span className={showPrimaryColor?"instruction-style primary-color":"instruction-style secondary-color"}> Listen
          </span> to the <span className={showPrimaryColor?"instruction-style primary-color":"instruction-style secondary-color"}>Beat</span>, then 
          <span className={showPrimaryColor?"instruction-style primary-color":"instruction-style secondary-color"}> Repeat</span>        
        </p>
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
          <img src={getBeatIcons} className="icon-style" alt="Current beat" />
        </section>                
        <section className={remainingBeats < record1Answers.length?"no-divider":"hide-icon"}>
          <article className="keyboard-header-section">
            <h3>KeyBoard</h3>
            <h3 className={startRecording?"hide-play-section":""}>Remaining Beats: {record1Answers.length-remainingBeats}</h3>
            <h3 className={!startRecording?"hide-play-section":""}>Free-Style</h3>
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
      </main>
      <footer>
          <section className="options-section">
            <article className="options">
              <p className="icon-author">Repeat "Beat Masters" training beat</p>
              <button onClick={playRecordingOne} className="footer-button">Play the Beat</button>
            </article>
            <article className="options">
              <p className="icon-author">Record your own beat</p>
              <section className="record-button-section">
                <button onClick={recordFreeStyleBeats} className="footer-button options record-buttons">Record</button>
                <button onClick={play} className="footer-button options record-buttons">Play</button>
              </section>
            </article>
          </section>
          <p className="authors">Icons by Chameleon Design, Vincent Le Moign, and Dot on Paper of https://icon-icons.com/</p>
          </footer>
    </div>
  );
}

export default App;
