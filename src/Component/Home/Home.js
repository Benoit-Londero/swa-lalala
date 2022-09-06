import React from "react";
import Container from "react-bootstrap/esm/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import { FaFileDownload } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";


/*import 'react-circular-progressbar/dist/styles.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const data = {
     labels: ['Heures achetées', 'Heures dépensées'],
     datasets: [
       {
         data: [80, 25],
         backgroundColor: [
          'rgba(60, 239, 190)',
          'rgba(245,245,245)',
         ]
       },
     ],
   };

   return :
   <Doughnut data={data} />
*/

// Variables dev factures liées au profil 
const facts = [
     {reference : 'FA01229082022', date: '29.08.2022', url:'http://ahgency.be'},
     {reference : 'FA01329315622', date: '02.09.2022', url:'http://ahgency.be'},
     {reference : 'FA01498526522', date: '06.09.2022', url:'http://ahgency.be'}
]

// Tableau Timesheet
const timesheet = [
     {tasks : 'Installation & configuration d’un plugin', date: '29.08.2022', time: 25, developper :'Quentin de Jarnac'},
     {tasks : 'Importation des contenus & responsive', date: '02.09.2022',time: 50, developper :'Benoit Londero'},
     {tasks : 'Développement web app REACTJS', date: '06.09.2022', time: 1200, developper :'Benoit Londero & Quentin de Jarnac'},
     {tasks : 'Formation + appels téléphonique', date: '06.09.2022', time: 10, developper :'Quentin de Jarnac'},
     {tasks : 'Installation des outils', date: '02.09.2022',time: 50, developper :'Fabian Hernandez'}

]

// Temps par défaut d'un pack de 50 heures
const hrs_buy = 3000;

// Addition du temps indiquée dans le timesheet
const hrs_used = timesheet.reduce((accumulator, object) =>{
     return accumulator + object.time;
}, 0);


export default function Home() {

     //Calcul + arrondissement du % à 2 décimale après la virgule
     const percentage = Math.round(((100/hrs_buy) * hrs_used)*100)/100;

      return (

     <div>
          <NavBar />

     <Container>
          <Row>
               <Col><h1>Hello John Doe</h1></Col>
          </Row>

          <Row>
              <Col className="resume">
                    <h2>Informations générales</h2>
                    <RiAccountCircleFill className="PPic" />
                    {/*<img src="" alt="Photo" className="PPic"/><br/>*/}
                    <p>John</p>
                    <p>Doe</p>
                    <p>johndoe@mail.com</p>
                    <p>BE 123.456.789</p>
                    <Button>Vers mon profil</Button>
               </Col>
               
               <Col className="stats">
                    <h2>Statistiques</h2>
                                      

                    <CircularProgressbar
                         value={percentage}
                         text={`${percentage}%`}
                         styles={{
                              path: {
                                strokeLinecap: 'round',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                              },
                              // Customize the circle behind the path, i.e. the "total progress"
                              trail: {
                                strokeLinecap: 'round',
                              },
                            }}
                    />
                    
                    <p>Heures achetées : {Math.round((hrs_buy /60)*10)/10 } h</p>
                    <p className="highlight">Heures dépensées : {Math.round((hrs_used /60)*10)/10 } h</p>
               </Col>
               <Col className="factures">
                    <h2>Dernières factures</h2>
                    <table>
                         <thead>
                              <tr>
                                   <th>Référence</th>
                                   <th>Date</th>
                                   <th className="last-child">Action</th>
                              </tr>
                         </thead>
                         <tbody>

                         {
                              facts.map((item,index) => {
                                   return (
                                        <tr key={index}>
                                             <td><p className="ref">{ item.reference}</p></td>
                                             <td><p>{ item.date}</p></td>
                                             <td className="last-child"><a href={item.url} className="PDF_ddl"><FaFileDownload /></a></td>
                                        </tr>
                                   )})
                         }

                         </tbody>
                    </table>
               </Col>
          </Row>
          <Row className="timesheet">
               <Col>
                    
                    <table>
                         <thead>
                              <tr>
                              <td colspan="3"><h2>Timesheet</h2></td>
                              <td className="time_hrs_right"> { Math.round((hrs_used/60)*10)/10 + " / " + Math.round((hrs_buy /60)*10)/10 + " H"} </td>
                              </tr>
                         </thead>
                         <tbody>
                         {
                              timesheet.map((item,index) => {
                                   return (
                                        <tr key={index}>
                                             <td><p className="tasks">{ item.tasks}</p></td>
                                             <td><p>{ item.date}</p></td>
                                             <td><p>{ item.time }  min</p></td>
                                             <td><p className="developer"> {item.developper}</p></td>
                                        </tr>
                                   )})
                         }
                         </tbody>
                    </table>
               </Col>
          </Row>
     </Container>

     </div>
 
      )
 }
