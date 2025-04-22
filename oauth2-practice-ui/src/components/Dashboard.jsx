import axios from 'axios';
import React, { useEffect } from 'react'

export default function Dashboard() {

  const [user, setUser] = useState();

  const fetchUser = () => {
    axios.get('', {withCredentials: true})
    .then(response => {
      setUser(response.data);
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
        </div>
      ) : (
        <p>Loading user data...</p>
      )}     
    </div>
  )
}
