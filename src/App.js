import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import BudgetDashboard from "./pages/BudgetDashboard"
import About from "./pages/About"
import Nav from './components/Nav'
import styled from 'styled-components'

const Wrapper = styled.div`
background: #EFF1F6;
height: 100vh;
`;

function App() {
  return (
    <Wrapper className="bg-green">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/budget">
          <BudgetDashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;
