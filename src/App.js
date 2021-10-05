import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage'
import SignUpPage from './views/SignUpPage';
import UserRoute from './views/UserRoute'
import CalendarView from './views/CalendarView'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/login" component={LoginPage}></Route>
      <Route exact path="/signup" component={SignUpPage}></Route>
      <UserRoute exact path="/calendar" component={CalendarView}/>
    </Switch>
   </BrowserRouter>
  );
}


export default App;
