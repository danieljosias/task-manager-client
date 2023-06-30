import { Switch, Route, Redirect } from 'react-router-dom'
import { Welcome } from "../pages/Welcome";
import { Dashboard } from "../pages/Dashboard";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome/>
      </Route>
      <Route exact path="/dashboard">
        <Dashboard/>
      </Route>
    </Switch>
  );
};