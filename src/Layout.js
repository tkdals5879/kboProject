import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, Outlet } from 'react-router-dom';
import Nav from './component/Nav';

import './css/layout/layout.css'


function Layout() {

  const navigate = useNavigate();

  const gotoHome = () => {
    navigate ('/')
  }

  return (
    <div className='layoutWrap'>
      <header className='fixedHeader'>
        <h1>KBO Project</h1>
        <button className='goToHome' onClick={gotoHome}><FontAwesomeIcon icon={faHouse} /></button>
      </header>

      <main className='pageContent'>
        <Outlet/>
      </main>
      
      <footer className='fixedNav'>
        <Nav/>
      </footer>

    </div>
  )
}

export default Layout;
