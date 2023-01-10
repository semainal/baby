
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
import Stories from "./pages/stories/Stories";
import Meals from "./pages/meals/Meals";
import { useContext } from "react";
import { Context } from "./context/Context";





function App() {
  const {user }= useContext(Context);
  
  
 
  return (
    
       
      
      
      <Router>
      <Topbar/>


        <Switch>
          <Route exact path="/">
        <Home/>
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/post/:post_id">
          <Single />
        </Route>

        <Route path="/write">
        {user ? <Write/> : <Register />}
        </Route>

        <Route path="/doctor">
        {user ? <Doctor/> : <Register />}
        </Route>

     

        <Route path="/playgames">
           <PlayGames />
        </Route>

        <Route path="/stories">
           <Stories />
        </Route>

        <Route path="/meals">
           <Meals />
        </Route>

        <Route path="/register">
        {user ? <Home/> : <Register />}
        </Route>

        <Route path="/login">
        {user ? <Home/> : <Login />}
        </Route>

        <Route path="/settings">
        {user ? <Settings/> : <Register />}
        </Route>

    
        </Switch>

        
        
      </Router>

      

  );
}

export default App;
