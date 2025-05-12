import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Dashboard() {

  const [user, setUser] = useState();

  const fetchUser = () => {
    axios.get('http://localhost:8080/user-data', {withCredentials: true})
    .then(response => {
      setUser(response.data);
    })
    .catch(error => {
      console.error('Error: ', error);
    })
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <img src={user.picture} 
               alt={user.name + "'s profile"}
               referrerPolicy='no-referrer' />
          <a href='http://localhost:8080/logout'>Logout</a>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}     
    </div>
  )
}
