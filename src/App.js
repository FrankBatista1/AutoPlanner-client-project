import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import SignUpPage from "./views/SignUpPage";
import UserRoute from "./views/UserRoute";
import CalendarView from "./views/CalendarView";
import ForgotPassword from "./views/ForgotPassword";
import ResetPassword from "./views/ResetPassword";
import CreateNewExercise from "./views/CreateNewExercise";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/signup" component={SignUpPage}></Route>
        <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
        <Route exact path="/passwordreset/:resetToken" component={ResetPassword} />
        <UserRoute exact path="/calendar" component={CalendarView} />
        <UserRoute exact path="/newexercise" component={CreateNewExercise} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
