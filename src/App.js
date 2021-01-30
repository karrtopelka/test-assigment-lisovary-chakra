import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Task1 from "./pages/Task1/Task1";
import Task2 from "./pages/Task2/Task2";
import Task3 from "./pages/Task3/Task3";
import Task4 from "./pages/Task4/Task4";
import Task5 from "./pages/Task5/Task5";
import Header from "./components/Header";
import { Flex, Grid } from "@chakra-ui/react";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Grid
          width="100%"
          maxWidth="none"
          p="2"
          h="100%"
          style={{ placeItems: "center" }}
        >
          <Flex direction="column" style={{ gap: 25 }}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/task1">
                <Task1 />
              </Route>
              <Route path="/task2">
                <Task2 />
              </Route>
              <Route path="/task3">
                <Task3 />
              </Route>
              <Route path="/task4">
                <Task4 />
              </Route>
              <Route path="/task5">
                <Task5 />
              </Route>
              <Route path="*" render={() => <Redirect to="/" />} />
            </Switch>
          </Flex>
        </Grid>
      </div>
    </Router>
  );
};

export default App;
