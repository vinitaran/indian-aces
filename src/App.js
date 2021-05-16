import './App.css';
import Header from './Components/Header';
import TopBar from "./Components/TopBar.jsx";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import SocialBar from "./Components/SocialBar.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from './Components/Navbar.js';

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
              <img alt="" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
              <img alt="" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
              <img alt="" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
              <img alt="" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
              
            </Route>
            <Route exact path="/about">
              
            </Route>
            <Route exact path="/categories">
              
            </Route>
            <Route exact path="/resources">
              
            </Route>
            <Route exact path="/team">
              
            </Route>
            <Route exact path="/submit">
              
            </Route>
            <Route exact path="/join-us">
              
            </Route>
            <Route exact path="/contribute">
              
            </Route>
            <Route exact path="/contact-us">
              
            </Route>
            <Route exact path="/about">
              
            </Route>
            
          </Switch>
          <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
