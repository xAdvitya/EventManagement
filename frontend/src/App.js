import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Navbar from './shared/components/navigation/Navbar';
import Event from './events/pages/Event'
import Details from './events/pages/Details';
import MakeEvents from './events/pages/MakeEvents';
 

function App() {
  return (
      <Router>
      
      <main>
        <Switch>
          <Route path='/' exact>
           <Event/>
          </Route>
          <Route path="/:eventId/events" exact>
            <Details/>
          </Route>

          <Route path="/test" exact>
            <Details/>
          </Route>

          <Route path="/makeevent" exact>
           <MakeEvents/>
          </Route>

          <Redirect to="/"/>
        </Switch>
      </main>
      </Router>
  );
}

export default App;
