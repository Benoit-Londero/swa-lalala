import React, {useState} from "react";
import './App.css';
import Connexion from './Component/Connexion/Connexion.js'
import Deconnexion from './Component/Deconnexion/Deconnexion.js'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Commentaire bidon   
 import Boutique from "./Component/Credits/Credits.js";
import NameForm from "./Component/Account/Account.js";
import Home from "./Component/Home/Home.js";
import Facture from "./Component/Facture/Facture.js";
import Inscription from "./Component/Inscription/Inscription.js";

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return <div>{data}{
          <Router>
  <Routes>
    <Route exact path="/" element={<Connexion handleSubmit={handleSubmit} erreur={erreur} login={login}/>}></Route>
    <Route path="/Home" element={< Home />}></Route>
    <Route path='/Account' element={< NameForm />}></Route>
    <Route path='/Credits' element={< Boutique />}></Route>
    <Route path='/Factures' element={< Facture />}></Route>
    <Route path='/Inscription' element={< Inscription />}></Route>
    <Route path='/Logout' element={< Deconnexion resetLogin={resetLogin}/>}></Route>
  </Routes>
</Router> }</div>;
}

export default App;
