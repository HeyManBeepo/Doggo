import './App.css';
import myImage from './Rover.jpg';
function Quiz() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myImage} className="App-logo" alt="logo" />
        <h1>The Impossible Rover Quiz</h1>
        <h2> by Rover</h2>
        <p>
          U will have 3 answers. <code> 5 of them are right.</code>
        </p>
        <form>
          <label>
            Name:
            <input type = "text" name = "name" />
          </label>
          <input type ="submit" value = "Submit" />
        </form>
        
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
      </header>
    </div>
  );
}

export default Quiz;



