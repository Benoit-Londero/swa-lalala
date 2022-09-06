import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";

//création Array pour les icones et chemin de navigation
export const SidebarData = [
    {
        title:'Home',
        path: '/Home',
        icon: <FaIcons.FaHouseUser />,
        cName: 's-sidebar__nav-link',
        admin: false
    },
    {
        title:'Account',
        path: '/Account',
        icon: <FaIcons.FaUser/>,
        cName: 's-sidebar__nav-link',
        admin: false
    },
    {
        title:'Boutique',
        path: '/Credits',
        icon: <FaIcons.FaPlus/>,
        cName: 's-sidebar__nav-link',
        admin: false
    },
    {
        title:'Factures',
        path: '/Factures',
        icon: <FaIcons.FaRegFileAlt/>,
        cName: 's-sidebar__nav-link',
        admin: false
    },
    {
        title:'LogOut',
        path: '/',
        icon: <RiIcons.RiLogoutBoxLine />,
        cName: 's-sidebar__nav-link',
        admin: false
    }
]
