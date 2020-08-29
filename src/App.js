import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPage from './components/searchpage/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
