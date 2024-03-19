import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from './components/Login';
import Services from './components/Services';
import CryptoPriceTracker from './components/CryptoPriceTracker';
import Mission from './components/Mission';
import Footer from './components/Footer';
import { auth } from './firebase';
import Home from './home';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <>

        <div>
          <section>
            <Routes>
              <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
              <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
          </section>
        </div>
      </>
    </Router>
  );
};

export default App;
