import React from "react";
import './App.css';
import Connexion from './Component/Connexion/Connexion.js'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Facture from "./Component/Facture/Facture";
import Boutique from "./Component/Credits/Credits";
import NameForm from "./Component/Account/Account";
import Home from "./Component/Home/Home";

function App() {

  return (
    <div className="App">
      <header className="App-header">
            
        <Router>
            <Routes>
              <Route exact path="/" element={<Connexion />}></Route>
              <Route path="/Home" element={< Home />}></Route>
              <Route path='/Account' element={< NameForm />}></Route>
              <Route path='/Credits' element={< Boutique />}></Route>
              <Route path='/Factures' element={< Facture />}></Route>
            </Routes>
        </Router>
      </header>
    </div>
  );
  
}

export default App;


