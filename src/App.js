import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';

import {Provider} from './context';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Provider>
    <Router>
    <>
      <Navbar />
      <div className="container">
      <Switch>
        <Route exact path="/"><Index /></Route>
      </Switch>
      </div>
    </>
    </Router>
    </Provider>
  );
}

export default App;
