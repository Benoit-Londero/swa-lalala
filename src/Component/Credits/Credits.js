import * as React from 'react';
import NavBar from "../NavBar/NavBar.js";

export default function Boutique() {

     const currentUSR = sessionStorage.getItem("currentUSR");
     const currentNOM = sessionStorage.getItem("currentNOM");
     const currentPNOM = sessionStorage.getItem("currentPNOM");
     const currentMAIL = sessionStorage.getItem("currentMAIL");
     const currentHeureTOT = sessionStorage.getItem("currentHeureTOT");
     const currentHeureREST = sessionStorage.getItem("currentHeureREST");
     const currentRole = sessionStorage.getItem("currentRole");

     console.log(currentRole);
     console.log(currentNOM);

     return (
          <div>
               <NavBar />
               <h1>Commander des heures {currentNOM}</h1>

               <a href="https://book.stripe.com/test_4gw8z43Mh5r13uwfYZ">Réservez 50 h</a>
         </div>

     )
}
