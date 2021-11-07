import './App.css';
import myImage from './pup.jpg';
import myImage2 from './maxresdefault.jpg'
import SubmitButton from './submitButton.js';
function AskRover() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myImage} className="App-logo" alt="logo" />
        <h1>Inbox? Email him a question!!!!</h1>
        <h2>Actually, we only take donations, and if u don't donate at least $30 per email, then it auto-trashes. Please, gimme money to buy some treats!!!!</h2>
      <SubmitButton/>
      </header>
    </div>
  );
}

export default AskRover;
