import React from "react";
import './Account.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "../NavBar/NavBar";



export default function NameForm(props) {

     return (
          <div>
               <NavBar />
               <Container>
                    <Row>
                       <Col><h1>Mon compte</h1></Col>
                    </Row>
               </Container>
               <Container className="account_section">
                    <Row>
                         <Col>
                              <h2>Informations générales</h2>
                         </Col>
                    </Row>

                    <Row>
                         <table>
                              <tbody>
                                   <tr><td><img src="" alt="profil_picture" className="PPic"/></td></tr>
                                   <tr><td><p>Nom</p></td><td><p>Doe</p></td></tr>
                                   <tr><td><p>Prénom</p></td><td><p>John</p></td></tr>
                                   <tr><td><p>Mail</p></td><td><p>johndoe@mail.com</p></td></tr>
                                   <tr><td><p>TVA</p></td><td><p>BE 123.456.789</p></td></tr>
                                   <tr><td><label for="pass">Modifier mon mot de passe</label></td></tr>
                                   <tr><td><input type="password" id="pass" placeholder="********"></input></td></tr>

                                   <tr><td><label for="confpass">Confirmer nouveau mot de passe</label></td></tr>
                                   <tr><td><input type="password" id="confpass" placeholder="********"></input></td></tr>

                                   <tr><td></td><td><input type="submit" value="Enregistrer"/></td></tr>
                              </tbody>
                         </table>
                         
                         <table>
                              <tbody>
                                   <tr><td><label for="deleteacc">Supprimer mon compte (ATTENTION !! Cette action est irréversible)</label></td>
                                   <td><input type="submit" value="Supprimer mon compte"/></td></tr>                                
                              </tbody>
                         </table>
                    </Row>
               </Container>        
         </div>
     )
}
