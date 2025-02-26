import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [jokes, setJokes] = React.useState([]);

  useEffect(() => { 
    axios.get('/api/jokes')
      .then(res => {
        setJokes(res.data);
      })
      .catch(err => {
        console.log(err);

      });

  } , []);
  return (
    <>
        <h1>chai and full stack</h1>
        <p>JOKES: {jokes.length}</p>

        {
          jokes.map(joke => (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          ))
        }

      </>
  );
}

export default App;
