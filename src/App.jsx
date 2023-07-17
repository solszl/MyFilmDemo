import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import FilmDatabase from "./logic/db/film-db";
import { getPX } from "./logic/utils/ppi";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const pxPerInch = getPX();
    console.log(pxPerInch);

    // const fn = async () => {
    //   let dbm = new DBManager();
    //   await dbm.query();
    // };

    // fn();

    let filmDB = new FilmDatabase();
    console.log(filmDB);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
