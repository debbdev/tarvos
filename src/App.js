import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Statusbar from "./components/Statusbar";
import Main from "./components/Main";
import Details from "./components/Details";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path ="/cart">
            <Statusbar backButton='/details' removeStatusBottom />
            <Cart/>
          </Route>
          <Route path ="/details">
            <Statusbar backButton='/' />
            <Details/>
          </Route>
          <Route path="/">
            <Statusbar />
             <Main/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
