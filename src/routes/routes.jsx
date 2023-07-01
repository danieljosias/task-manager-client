import { Switch, Route, Redirect } from 'react-router-dom'
import { Welcome } from "../pages/Welcome";
import { Dashboard } from "../pages/Dashboard";
import { SignUp } from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome/>
      </Route>

      <Route exact path="/dashboard">
        <Dashboard/>
      </Route>

      <Route exact path="/signup">
        <SignUp/>
      </Route>
      
      <Route exact path="/signin">
        <SignIn/>
      </Route>
    </Switch>
  );
};