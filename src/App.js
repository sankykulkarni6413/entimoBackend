import Signup from './Components/SignUp';
import Login from './Components/Login';
import Main from './Components/Main';
import Landing from './Components/Landing';
import Registration from './Components/Registration';
import Homepage from './Components/Homepage/Homepage';
import "./App.css";
import {Route,BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route path="/SignUp">
          <Signup/>
          </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Homepage">
          <Homepage />
        </Route>
    </Router>
    
    
  );
}
const mapStateToProps = store => ({
  location: store.router.location
});
export default App;
