import './App.css';
import myImage from './Rover.jpg';
export default function Rover() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myImage} className="App-logo" alt="logo" />
        <h1>Rover</h1>
        <h2>Rover</h2>
        <a
          className="App-link"
          href="AskRover.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ask Rover a question! Email him here:
        </a>
      </header>
    </div>
  );
}

