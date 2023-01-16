import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';
// import './Navbar.css';
import { IconContext } from 'react-icons';
import './makeproposal.css'


const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'All Tenders',
    path: '/bidtenders',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Active Tenders',
    path: '/activetenders',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }, 
  
  {
    title: 'Tender Results',
    path: '/tenderresults',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];



function MakeProposalSidebar () {
  
  return (
    <>
      
<div className='nav-menu active'>

          <ul className='makeproposalsidebar'>
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </div>
        


    </>
  );
}

export default MakeProposalSidebar;