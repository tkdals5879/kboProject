import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Modal from '../component/Modal';

import '../css/stadiumDetail/stadiumDetail.css'

function StadiumDetail() {

    const { teamId } = useParams();
    const teams = useSelector((state) => state.teams.teams)
    const clickedTeam = teams.find(team => team.id === teamId)

    
    const [modalOpen,setModalOpen] = useState(false)
    
    const handleModalOpen = () => {
        setModalOpen(true)
    }

    const handleModalClose = () => {
        setModalOpen(false)
    }
    
    useEffect(() => {console.log("모달 상태 > ", modalOpen)},[modalOpen])
    
    if (!clickedTeam) return <p>팀을 찾을 수 없습니다!</p>

    return (
        <div className='stadiumDetailWrap'>

            <div className='information'>
                <div className='text'>
                    <h1>{clickedTeam.stadiumName}</h1>
                    <p>{clickedTeam.stadiumOpen}</p>
                </div>
                <div className='stadiumPicture'>
                    <img src={clickedTeam.stadiumImg} alt={clickedTeam.stadiumName} />
                </div>
                <div className='homeTeamInfo'>
                    <h2>홈 구단 정보</h2>
                    <div>
                        <div className='homeTeamInfoLeft'>
                            <img src={clickedTeam.logo} alt={clickedTeam.homeTeam} />
                        </div>
                        <div className='homeTeamInfoRight'>
                            <h3>{clickedTeam.homeTeam}</h3>
                            <p>전적</p>
                            <p>승률</p>
                            <span onClick={handleModalOpen}>더보기</span>
                            {/* 경기실적 넣기 */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='location'>
                <h2>위치</h2>
                <iframe src={clickedTeam.iframeUrl}></iframe>
            </div>

            {modalOpen && (
                <Modal clickedTeam={clickedTeam} handleModalClose={handleModalClose}/>
            )}

        </div>
    )
}

export default StadiumDetail;
