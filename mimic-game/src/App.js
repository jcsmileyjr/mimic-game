import './App.css';
//import test from './video/frontloop6.gif';

function App() {
  return (
    <div className="App">
      <header className="header-style">
        <p>Let's play the game</p>
        <h1 className="remove-top-margin">Mimic the Beat</h1>
        <p>Instructions: Listen to the Beat, then Repeat</p>
        <h4 className="remove-top-margin">Score: 0</h4>
      </header>
      <main>
        <h3>Click to Listen</h3>
        <section>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
          <path d="M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 12h-12v-10h12v10zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm-12 10v-6l5 3-5 3z"/>
        </svg>
        </section>
        <h3>KeyBoard</h3>
        <section>
          <article>

          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
