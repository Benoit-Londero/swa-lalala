import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Connexion.css';

export default function Connexion() {

    const navigate = useNavigate();
    const [erreur, setErreur] = useState(false);


    const handleSubmit = e => {
        e.preventDefault(); //on empêche le refresh de la page, nécessaire pour garder les infos déjà présente lors d'un submit érronés
        let logForm = document.getElementById('logForm'); //on récupère l'élement <form> et ces différents <input>
        let myform = new FormData(logForm); //que l'on intègre à un formData

        console.log(myform);

        fetch('/api/form', { method: 'POST', body: myform })
        .then(res => res.json())
        .then(json => {if(json.length === 1) {navigate('/Home')} else {setErreur(true)}})
        .catch(err => console.info(err))
    }

  return (
    <div>
        {erreur === true ? <span>Email ou mot de passe érroné</span> : null }
        <form id="logForm" onSubmit={handleSubmit}>
            <label>Nom :
                <input type="text" name="email" placeholder="Votre email" required/>
            </label>
            <label>Mot de passe :
                <input type="text" name="pwd" placeholder="Votre mot de passe" required/>
            </label>
            <input type="submit" name="Connexion" />
        </form>
    </div>
  )
}
