import logo from './logo.svg';
import './App.css';
import {useGetSocial} from "./API/apiSite";
import { useState } from "react";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(0);
  const { data, loading, error, hasNextPage } = useGetSocial(params, page);
  console.log("data", data);
  console.log(loading);
  console.log(error);
  return (
    <div className="App">
          <ul>
      {data.map(animal => (
        <li>{animal.title}</li>
      ))}
    </ul>
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
