import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div className='navWrap'>
      <ul>
        <Link to={'/stadium'}><li>구장정보</li></Link>
        <Link to={'/schedule'}><li>경기일정</li></Link>
        <Link to={'/ticketing'}><li>예매하기</li></Link>
        <Link to={'/myteam'}><li>나의구단</li></Link>
        <Link to={'/result'}><li>결과조회</li></Link>
      </ul>
    </div>
  )
}

export default Nav;
