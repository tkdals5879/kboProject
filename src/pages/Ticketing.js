import React from 'react'

import '../css/ticketing/ticketing.css'

function Ticketing() {

  return (
    <div className='ticketingWrap'>
      <h2>예매하기</h2>
      <div className='linkWrap'>
        <h3>티켓링크 ( SSG,LG,KT,KIA,삼성,한화 )</h3>
        <div><a href="https://www.ticketlink.co.kr/sports" target='_blank' rel="noreferrer">ㅁㄴㅇ</a></div>
      </div>
      <div className='linkWrap'>
        <h3>인터파크 ( 두산,키움 )</h3>
        <div><a href="https://ticket.interpark.com/Contents/Sports" target='_blank' rel="noreferrer">asd</a></div>
      </div>
      <div className='linkWrap'>
        <h3>롯데자이언츠</h3>
        <div><a href="https://www.giantsclub.com/html/index.asp?" target='_blank' rel="noreferrer">asd</a></div>
      </div>
      <div className='linkWrap'>
        <h3>NC 다이노스</h3>
        <div><a href="https://www.ncdinos.com/" target='_blank' rel="noreferrer">asd</a></div>
      </div>
    </div>
  )
}

export default Ticketing;
