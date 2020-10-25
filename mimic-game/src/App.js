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

const record1Answers = ["A","S","D","F","G","H","J","K","L"];

function App() {
  const [userActions, setUserActions] = useState([]);
  const [remainingBeats, setRemainingBeats] = useState(0);

  const updateBeats = (key) => {
    let correctKey = record1Answers[remainingBeats];
    if(key === correctKey){
      let currentBeatCount = remainingBeats + 1;
      setRemainingBeats(currentBeatCount);
    }else{
      console.log("try again");
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
        <h4 className="remove-top-margin">Score: 0</h4>
      </header>
      <main>        
        <section className="section-divider">
          <h3>Click to Listen</h3>
          <button onClick={playRecordingOne}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
              <path d="M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 12h-12v-10h12v10zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm-12 10v-6l5 3-5 3z"/>
            </svg>
          </button>
        </section>        
        <section>
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
      </main>
    </div>
  );
}

export default App;
