import { Login } from "./views/Login";
import { Dashboard } from "./views/Dashboard";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { RightNav } from "./cmps/RightNav";
import { Search } from "./views/Search"
import { Player } from "./cmps/Player";
import { useState } from "react";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  const [currSong, setCurrSong] = useState()
  return (
    <Router>
      <section className="main-app flex column">
        <div className="content flex">

      {code ? <RightNav></RightNav> : null}
      <Routes>  
        <Route path="/login" element={<Login></Login>}></Route>
        <Route exact path="/" element={<Dashboard code={code}></Dashboard>}></Route>
        <Route path="/search" element={<Search code={code}></Search>}></Route>
      </Routes>
        </div>
      {code ? <Player trackUri={currSong}></Player> : null}
      </section>
    </Router>
  );
}

export default App;
