import './App.css';
//import test from './video/frontloop6.gif';
import Key from './Components/Key';
function App() {
  return (
    <div className="App">
      <header className="header-style">
        <p>Let's play the game</p>
        <h1 className="remove-top-margin">Mimic the Beat</h1>
        <p className="instruction-section">Instructions: <span className="instruction-style">Listen</span> to the <span className="instruction-style">Beat</span>, then <span className="instruction-style">Repeat</span></p>
        <h4 className="remove-top-margin">Score: 0</h4>
      </header>
      <main>        
        <section>
          <h3>Click to Listen</h3>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
              <path d="M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 12h-12v-10h12v10zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm-12 10v-6l5 3-5 3z"/>
            </svg>
          </button>
        </section>        
        <section>
          <h3>KeyBoard</h3>
          <article>
            <Key letter="A" />
            <Key letter="S" />
            <Key letter="D" />
            <Key letter="F" />
            <Key letter="G" />
          </article>
          <article className="space-between-key-group">
            <Key letter="H" />
            <Key letter="J" />
            <Key letter="K" />
            <Key letter="L" />
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
