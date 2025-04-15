import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {

  const scrollToTop = () => {
    window.scrollTo({
      top : 0
    })
  }

  return (
    <div className='navWrap'>
      <ul>
        <Link to={'/stadium'} onClick={scrollToTop}><li>구장정보</li></Link>
        <Link to={'/schedule'} onClick={scrollToTop}><li>경기일정</li></Link>
        <Link to={'/ticketing'} onClick={scrollToTop}><li>예매하기</li></Link>
        <Link to={'/myteam'} onClick={scrollToTop}><li>나의구단</li></Link>
        <Link to={'/result'} onClick={scrollToTop}><li>결과조회</li></Link>
      </ul>
    </div>
  )
}

export default Nav;
