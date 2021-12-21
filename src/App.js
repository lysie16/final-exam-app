import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LoginPage} from './components/pages/LoginPage';
import {Navbar} from './components/Navbar';
import {ProfilePage} from './components/pages/ProfilePage';
import {HomePage} from './components/pages/HomePage';
import {NewPostPage} from './components/pages/NewPostPage';



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
            <HomePage />
          </Route>
          <Route exact path="/me">
            <Navbar />
            <ProfilePage /> 
          </Route>
          <Route exact path="/NewPost">
           <Navbar />
            <NewPostPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
