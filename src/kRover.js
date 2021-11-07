import './App.css';
import myImage from './Rover.jpg';
function askRover() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myImage} className="App-logo" alt="logo" />
        <h1>Rover</h1>
        <h2>Rover</h2>
        <img src={myImage} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://wikipedia.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ask Rover a question! Email him here:
        </a>
      </header>
    </div>
  );
}

export default askRover;
