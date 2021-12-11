import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LoginPage} from './components/pages/LoginPage';
import {Navbar} from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
