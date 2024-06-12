import logo from './logo.svg';
import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

function App() {
    const [error, setError] = useState(null);
    const [food, setFood] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:1337/api/rocks")
        .then(({ data }) => setFood(data.data))
        .catch((error) => setError(error));
    }, []);

    if (error) {
      // Print errors if any
      return <div>An error occured: {error.message}</div>;
    }
  
    console.log(food)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          
          {food.map(({ id, attributes }) =>  <p key={id}>{attributes.Name}</p> )}
         </div>
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
