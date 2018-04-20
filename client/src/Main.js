import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginComponent from "./Admin/Components/LoginComponent/LoginComponent";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/login' component={LoginComponent} />
      </Switch>
    </div>
  )
}

export default Main