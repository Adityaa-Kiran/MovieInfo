import React from 'react';
import '../styles.css';

const LoginBody = ({ userData, setUserData, handleSubmit }) => {
  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  )
};

export default LoginBody;
