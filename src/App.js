import './App.css';
import Header from './Components/Header';
import TopBar from "./Components/TopBar.jsx";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import SocialBar from "./Components/SocialBar.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from './Components/Navbar.js';
import Mainbody from './Components/Mainbody';
import AboutUs from "./Components/pages/AboutUs";
import Blog from './Components/pages/Blog';
import JoinUs from './Components/pages/JoinUs';
import Contact from './Components/pages/Contact';
import ComingSoon from './Components/pages/ComingSoon';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <TopBar /> 
        <Header />
        <Navbar />
        <SocialBar />
          <Switch>
            <Route exact path="/">
              <Mainbody />
              
            </Route>
            <Route exact path="/ComingSoon">
              <ComingSoon/>
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/resources">
              
            </Route>
            <Route exact path="/team">
              
            </Route>
            <Route exact path="/submit">
              
            </Route>
            <Route exact path="/join-us">
              <JoinUs />
            </Route>
            <Route exact path="/contribute">
              
            </Route>
            <Route exact path="/contact-us">
              <Contact />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
          </Switch>
          <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
