import React from 'react';
import NavigationBar from "./components/NavigationBar";
import FirstPage from "./components/FirstPage";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from './components/RightSideBar';
import NoSideBar from "./components/NoSideBar";
import {BrowserRouter,Route,Switch} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
    <NavigationBar/>
    <Switch>
      <Route path="/" exact component={FirstPage}/>
      <Route path="/leftsidebar" component={LeftSideBar}/>
      <Route path="/rightsidebar" component={RightSideBar}/>
      <Route path="/nosidebar" component={NoSideBar}/>
    </Switch>
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
