import React, { useState } from 'react';
import axios from 'axios';
import LoginBody from '../components/LoginBody';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles.css';

const LoginPage = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', userData);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <Header />
      <LoginBody userData={userData} setUserData={setUserData} handleSubmit={handleSubmit} />
      <Footer />
    </div>
  );
};

export default LoginPage;
