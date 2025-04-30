import React, { useState } from 'react'
import ScheduleModal from '../component/ScheduleModal'

import '../css/schedule/schedule.css'

function Schedule() {

  const [modalOpen,setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  return (
    <div className='scheduleWrap'>

      <div className='scheduleTop'>
        <h2>오늘 경기일정</h2>
        <div className='schedule'>
          <div>
            <div>
              <figure><img src="./samsungLogo.svg" alt="samsung" /></figure>
              <p>삼성 라이온즈</p>
            </div>
            <span>vs</span>
            <div>
              <figure><img src="./kiaLogo.svg" alt="kia" /></figure>
              <p>기아 타이거즈</p>
            </div>
          </div>
          <p>(삼성 라이온즈파크)</p>
        </div>
        <span onClick={handleModalOpen}>더보기</span>
      </div>

      <div className='scheduleBottom'>
        <h2>나의 팀 경기 일정</h2>
        <div className='schedule'>
          <div>
            <div>
              <figure><img src="./samsungLogo.svg" alt="samsung" /></figure>
              <p>삼성 라이온즈</p>
            </div>
            <span>vs</span>
            <div>
              <figure><img src="./kiaLogo.svg" alt="kia" /></figure>
              <p>기아 타이거즈</p>
            </div>
          </div>
          <p>(삼성 라이온즈파크)</p>
        </div>
      </div>

      {modalOpen && (<ScheduleModal handleModalClose={handleModalClose}/>)}

    </div>
  )
}

export default Schedule;
