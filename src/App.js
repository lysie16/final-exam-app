import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LoginPage} from './components/pages/LoginPage';
import {Navbar} from './components/Navbar';
import {ProfilePage} from './components/pages/ProfilePage';
import {Sidebar} from './components/Sidebar';



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
            <div className="app-page">
            <Sidebar />
            {/* <div className="app-posts">
              <Posts />
            </div> */}
            {/* <Sidebar2 /> */}
            </div>
          </Route>
          <Route exact path="/profile">
            <Navbar />
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
