import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import VerifyJWTPage from './pages/verify_jwt';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/verify_jwt" component={VerifyJWTPage} />
          <Route path="/" component={LoginPage} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

