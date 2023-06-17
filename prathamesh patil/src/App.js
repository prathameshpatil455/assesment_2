import React from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
import TicketPage from './TicketPage';
import NotFoundPage from './NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="/new-ticket" component={TicketPage} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
