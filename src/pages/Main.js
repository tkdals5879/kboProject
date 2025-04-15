import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { toggleFavorite } from '../redux/slice/teamsSlice'

import '../css/main/main.css'



function Main() {

  const dispatch = useDispatch()
  const teams = useSelector((state) => state.teams.teams)

  const favToogle = (teamId) => {
    dispatch(toggleFavorite(teamId))
  }

  return (
    <div className='mainWrap'>

      <section>
        <h2>KBO 구단</h2>

        <div className='clubWrap'>
          {teams.map(team => (
            <div key={team.id}>
              <img src={team.logo} alt={team.name + 'logo'} />
              <button className='favorite' onClick={() => favToogle(team.id)}><FontAwesomeIcon icon={faStar} className={team.isFavorite ? 'fav' : ''} /></button>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Main;

// 리덕스 툴킷으로 바꿔야함. 리덕스 툴킷 마스터하고 오자.