import { Route, Routes } from 'react-router-dom'
import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Squad from './components/Squad';

function App() {

  return (
    <main>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/squad" element={ <Squad /> } />
          {/* <Route path="/trophies" element={ <Trophies /> } />
          <Route path="/fixtures" element={ <Fixtures /> } /> */}
        </Routes>
    </main>
  );
}
export default App;
