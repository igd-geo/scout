import React from 'react';
import './App.scss';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TopBar from './components/TopBar'
import Home from './components/Home'
import Aggregation from './components/Aggregation'
import Settings from './components/Settings'
import NotFound from './components/NotFound'
import LiveMonitoring from './components/LiveMonitoring/LiveMonitoring'

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <TopAppBarFixedAdjust />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/live-monitoring" component={LiveMonitoring} />
          <Route path="/dashboard" component={Aggregation} />
          <Route path="/settings" component={Settings} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
