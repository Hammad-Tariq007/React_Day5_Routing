import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { username } = useParams();
  return (
    <div className="page-container">
      <h1>Profile</h1>
      <p>I am {username}</p>
    </div>
  );
};

export default User;
