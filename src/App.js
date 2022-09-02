import React, { useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const url = 'https://api---1.herokuapp.com/api'
    const [users, setUsers] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setUsers(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])
  return (
    <div className="App">

          <ul>
              {!users ? 'loading...' :
                  users.users.map((user, index) => {
                      return <li>{user}</li>
                  })
              }
          </ul>

    </div>
  );
}

export default App;
