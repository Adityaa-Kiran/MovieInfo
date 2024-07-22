import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

const VerifyJWTPage = () => {
  const [userId, setUserId] = useState('');

  const verifyToken = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.post('/api/auth/verify', { token });
        setUserId(response.data.userId);
      } catch (error) {
        console.error('Verification failed', error);
      }
    }
  };

  return (
    <div className="container">
      <button onClick={verifyToken}>Verify Token</button>
      {userId && <p>User ID: {userId}</p>}
    </div>
  );
};

export default VerifyJWTPage;
