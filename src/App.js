import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage'
import SignUpPage from './views/SignUpPage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/login" component={LoginPage}></Route>
      <Route exact path="/signup" component={SignUpPage}></Route>
    </Switch>
   </BrowserRouter>
  );
}


export default App;
