import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage'


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/login" component={LoginPage}></Route>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
