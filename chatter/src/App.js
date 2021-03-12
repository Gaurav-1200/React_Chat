import React, { useState } from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Chatins from "./Chatins";
import Login from "./Login";


function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      {!user ?  (<Login/>) :( <div className="app_body">
        <Router>
        <Sidebar/>
          <Switch>
            <Route path ="/rooms/:roomId">
              <Chat/>
            </Route>
            <Route path ="/">
              <Chat/>
            </Route>
          </Switch> 
        </Router>
         

        {/*<Router>
          <Switch>
            <Sidebar/>  
            <Route path="/rooms/:roomId"> 
              <Chat/>
            </Route>
            <Route path="/">
              <Chat/>
            </Route>
          </Switch>
        </Router>*/}
      </div>
      )}
     
    </div>
  );
}

export default App;
