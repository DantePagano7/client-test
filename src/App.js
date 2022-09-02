import React, { useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])
  return (
    <div className="App">
          Hola mundo
        <ul>
            {!todos ? 'Cargando...' :
            todos.map((todo, index) => {
                return <li>{todo.title} {todo.completed ?'*':'X'}</li>
            })
            }
        </ul>
    </div>
  );
}

export default App;
