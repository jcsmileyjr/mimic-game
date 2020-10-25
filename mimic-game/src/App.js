import './App.css';
import React, {useState} from 'react';
import Key from './Components/Key';
import sound1 from './assets/boom.wav';
import sound2 from './assets/clap.wav';
import sound3 from './assets/kick.wav';
import sound4 from './assets/openhat.wav';
import sound5 from './assets/ride.wav';
import sound6 from './assets/snare.wav';
import sound7 from './assets/tink.wav';
import sound8 from './assets/tom.wav';
import sound9 from './assets/hihat.wav';
import record1 from './assets/record1.webm';
import badBeatIcon from './assets/wrongBeat.png';
import celebration from './assets/celebration.png';

const record1Answers = ["A","S","D","F","G","H","J","K","L"];

function App() {
  const [userActions, setUserActions] = useState([]);
  const [remainingBeats, setRemainingBeats] = useState(0);
  const [showListenIcon, setListenIcon] = useState(true);
  const [showCorrectBeatIcon, setCorrectBeatIcon] = useState(false);
  const [showBadBeatIcon, setBadBeatIcon] = useState(false);

  const correctBeat = () => {
    setListenIcon(false);
    setCorrectBeatIcon(true);
    setTimeout(() => {
      setListenIcon(true);
      setCorrectBeatIcon(false);
    }, 300);
  }

  const badBeat = () => {
    setListenIcon(false);
    setBadBeatIcon(true);
    setTimeout(() => {
      setListenIcon(true);
      setBadBeatIcon(false);
    }, 300);
  }

  const updateBeats = (key) => {
    let correctKey = record1Answers[remainingBeats];
    if(key === correctKey){
      correctBeat();
      let currentBeatCount = remainingBeats + 1;
      setRemainingBeats(currentBeatCount);
    }else{
      badBeat();
    }
  }

  const playRecordingOne = () => {
    let audio = new Audio(record1);
        audio.play();
  }

  const saveUserAction = (letter) => {
    setUserActions([...userActions, letter]);
    updateBeats(letter);
  }

  return (
    <div className="App">
      <header className="header-style">
        <p>Let's play the game</p>
        <h1 className="remove-top-margin">Mimic the Beat</h1>
        <p className="instruction-section">Instructions: <span className="instruction-style">Listen</span> to the <span className="instruction-style">Beat</span>, then <span className="instruction-style">Repeat</span></p>
      </header>
      <main>        
        <section className={showListenIcon?"section-divider":"hide-icon"}>
          <h3>Click to Listen</h3>
          <button onClick={playRecordingOne}>
            <svg className="play-music" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
              <path d="M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 12h-12v-10h12v10zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm-12 10v-6l5 3-5 3z"/>
            </svg>
          </button>
        </section>
        <section className={showCorrectBeatIcon?"section-divider":"hide-icon"}>
          <h3>Perfect</h3>
          <img src={celebration} className="bad-beat-icon-style" alt="Big green party symbol" />
        </section>
        <section className={showBadBeatIcon?"section-divider":"hide-icon"}>
          <h3>Incorrect</h3>
          <img src={badBeatIcon} className="bad-beat-icon-style" alt="Big red x symbol" />
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
