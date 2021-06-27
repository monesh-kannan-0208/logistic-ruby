import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Org from './components/pages/org';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Org} />
        {/* <Route path="/updateStatus"><FormSec/></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
