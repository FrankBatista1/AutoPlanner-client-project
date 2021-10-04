import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './views/HomePage'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
