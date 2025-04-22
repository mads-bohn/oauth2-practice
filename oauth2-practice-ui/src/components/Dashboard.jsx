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
      <h2>Welcome</h2>
      <p>Name:</p>
      <p>Email:</p>
    </div>
  )
}
