import logo from './logo.svg';
import './App.css';
import Player from './component/Player';
import mp3Sound from './sound/chayvenoiphiaanh.mp3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Player url={mp3Sound}/>
    </div>
  );
}

export default App;
