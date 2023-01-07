
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";

import Topbar from "./components/topbar/Topbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Contact from "./pages/contact/Contact";
import Doctor from "./pages/doctor/Doctor";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import PlayGames from "./pages/playGames/PlayGames";







function App() {

 
  return (
    <div className="App">
       
      
      
      <Router>
      <Topbar/>


        <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/post/:postId">
          <Single />
        </Route>

        <Route path="/write">
        <Write/> 
        </Route>

        <Route path="/doctor">
          <Doctor />
        </Route>

        <Route path="/playgames">
           <PlayGames />
        </Route>

        <Route path="/register">
          <Register/>
        </Route>

        <Route path="/login">
           <Login />
        </Route>

        <Route path="/settings">
           <Settings />
        </Route>

    
        </Switch>

        
        
      </Router>

      
    </div>
  );
}

export default App;
