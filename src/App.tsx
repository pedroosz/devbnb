import { Route, Switch } from "wouter";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
