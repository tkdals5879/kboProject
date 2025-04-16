import React from 'react'
import { useSelector } from 'react-redux';

import '../css/stadium/stadium.css'
import { useNavigate } from 'react-router-dom';

function Stadium() {

  const teams = useSelector((state) => state.teams.teams)
  console.log(teams)

  const navigate = useNavigate()

  const handleNavigate = (teamId) => {
    navigate(`/stadium/${teamId}`)
  }

  return (
    <div className='stadiumWrap'>

      <h2>구장 정보</h2>

      <div className='contentsWrap'>
        {teams.map(team => (
          <div key={team.id} className={`stadium ${team.name.toLowerCase()} ${team.isFavorite ? 'favorite' : ''}`} onClick={() => handleNavigate(team.id)}>
            <div className='infoBox'>
              <div className='stadiumInfo'>
                <h3>{team.stadiumName}</h3>
                <h4>{team.add}</h4>
              </div>
              <p>홈 구단 : {team.homeTeam}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Stadium;

{/* <div className='stadium lg'>
  <div className='infoBox'>
    <div className='stadiumInfo'>
      <h3>서울 종합운동장</h3>
      <h4>서울,잠실</h4>
    </div>
    <p>홈구단 : LG 트윈스</p>
  </div>
</div> */}
