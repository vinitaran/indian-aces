import './App.css';
import Header from './Components/Header';
import TopBar from "./Components/TopBar.jsx";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import SocialBar from "./Components/SocialBar.jsx";
import Footer from "./Components/Footer.jsx";
// import Navbar from './Components/Navbar.js';

function App() {
  return (
    <div className="App">
      <TopBar />      
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header />
              {/* <Navbar /> */}
              <SocialBar />
              <img alt="" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
              <img alt="" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
              <img alt="" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
              <img alt="" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
              <Footer />
            </Route>
            <Route exact path="/about">
              <Header />
            </Route>
            
          </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
