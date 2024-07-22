import React, { useState } from 'react';
import axios from 'axios';
import SignupBody from '../components/SignupBody';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles.css';

const SignupPage = () => {
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/signup', userData);
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div>
      <Header />
      <SignupBody userData={userData} setUserData={setUserData} handleSubmit={handleSubmit} />
      <Footer />
    </div>
  );
};

export default SignupPage;
