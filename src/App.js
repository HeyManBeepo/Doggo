import './App.css';
import AskRover from './AskRover';
import Rover from './Rover';
import Quiz from './Quiz';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to = '/Quiz'>The impossible Rover Quiz</Link>
            </li>
            <li>
              <Link to = '/AskRover'>Ask Rover A question?</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path = "/Quiz">
            <Quiz />
          </Route>
          <Route path = "/AskRover">
            <AskRover />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}
