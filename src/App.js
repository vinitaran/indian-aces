import './App.css';
import Header from './Components/Header';
import TopBar from "./Components/TopBar.jsx";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import MenuBar from './Components/MenuBar';

function App() {
  return (
    <div className="App">
      <TopBar />      
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header />
              <MenuBar />
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
