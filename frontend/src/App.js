import React, {useEffect,useState} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SearchBar from 'material-ui-search-bar';
import axios from "axios";
import CardDisplay from "./CardDisplay";
import CardPage from "./CardPage";


export default function App() {
  return (
    <div className="App">
      <h1>Hearthstone Card </h1>
      <Router>
        <Routes>
          <Route exact path="/" element={<CardDisplay/>} />
          <Route exact path="/card/:id" element={<CardPage/>} />
        </Routes>
      </Router>
    </div>
  );
}
