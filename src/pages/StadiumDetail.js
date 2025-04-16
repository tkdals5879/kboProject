import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import '../css/stadiumDetail/stadiumDetail.css'


function StadiumDetail() {

    const { teamId } = useParams();
    const teams = useSelector((state) => state.teams.teams)
    const clickedTeam = teams.find(team => team.id === teamId)

    if (!clickedTeam) return <p>팀을 찾을 수 없습니다!</p>


    return (
        <div className='stadiumDetailWrap'>

            <div className='information'>
                <div className='text'>
                    <h1>{clickedTeam.stadiumName}</h1>
                    <p>{clickedTeam.stadiumOpen}</p>
                </div>
                <div className='stadiumPicture'></div>
                <div className='homeTeamInfo'>
                    <div className='homeTeamInfoLeft'>
                        <img src={clickedTeam.logo} alt={clickedTeam.homeTeam} />
                    </div>
                    <div className='homeTeamInfoRight'>
                        <h3>{clickedTeam.homeTeam}</h3>
                        {/* 경기실적 넣기 */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StadiumDetail;
