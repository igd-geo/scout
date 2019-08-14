import React from 'react';
import './App.scss';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TopBar from './components/TopBar'
import Home from './components/Home'
import Settings from './components/Settings'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <TopAppBarFixedAdjust />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
