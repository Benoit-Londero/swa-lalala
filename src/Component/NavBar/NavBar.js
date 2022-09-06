import React, { useState, useEffect } from 'react';
import { SidebarData } from "./SlidebarData";
import './NavBar.css';
import { Link} from 'react-router-dom';


function NavBar(){

     const [menu, setMenu] = useState([]);

     useEffect(() => {
          LoadMenu();
          console.log('i fire once')
      }, []);
  
     const LoadMenu = () => {
          SidebarData.filter(recherche => recherche.admin === false).map((donnee) => setMenu(menu => [...menu, donnee]));
      }

      return (
          <div className="s-sidebar__nav">
               <div className='top'></div>
               <ul className="NavBar">                
                  {
                      menu.map((item, index) => {
                          return ( <li key = { index }>
                              <Link to = { item.path } className = { item.cName }>{ item.icon }</Link></li>
                          )})
                  } 
               </ul>
               <div className='bot'></div>
          </div>  
     );    
};

export default NavBar