import React from 'react'

import '../css/stadium/stadium.css'

function Stadium() {
  return (
    <div className='stadiumWrap'>

      <h2>구장 정보</h2>

      <div className='contentsWrap'>
        <div className='stadium lg'>
          <div className='infoBox'>
            <div className='stadiumInfo'>
              <h3>서울 종합운동장</h3>
              <h4>서울,잠실</h4>
            </div>
            <p>홈구단 : LG 트윈스</p>
          </div>
        </div>
        <div className='stadium samsung'>
          <div className='infoBox'>
            <div className='stadiumInfo'>
              <h3>라이온즈파크</h3>
              <h4>대구</h4>
            </div>
            <p>홈구단 : 삼성 라이온즈</p>
          </div>
        </div>
        <div className='stadium kia'>
          <div className='infoBox'>
            <div className='stadiumInfo'>
              <h3>월명 종합야구경기장</h3>
              <h4>군산</h4>
            </div>
            <p>홈구단 : 기아 타이거즈</p>
          </div>
        </div>
        <div className='stadium doosan'>
          <div className='infoBox'>
            <div className='stadiumInfo'>
              <h3>서울 종합운동장</h3>
              <h4>서울,잠실</h4>
            </div>
            <p>홈구단 : 두산 베어스</p>
          </div>
        </div>
        <div className='stadium kt'>
          <div className='infoBox'>
            <div className='stadiumInfo'>
              <h3>KT위즈파크</h3>
              <h4>수원</h4>
            </div>
            <p>홈구단 : KT 위즈</p>
          </div>
        </div>
        <div className='stadium ssg'>
          <div className='infoBox'>
            <div className='stadiumInfo'>
              <h3>SSG랜더스필드</h3>
              <h4>인천</h4>
            </div>
            <p>홈구단 : SSG 랜더스</p>
          </div>
        </div>
        <div className='stadium lotte'>
          <div className='infoBox'>
            <div className='stadiumInfo'>
              <h3>사직 야구장</h3>
              <h4>부산</h4>
            </div>
            <p>홈구단 : 롯데 자이언츠</p>
          </div>
        </div>
        <div className='stadium kiwoom'>
          <div className='infoBox'>
            <div className='stadiumInfo'>
              <h3>고척 스카이돔</h3>
              <h4>서울,구로</h4>
            </div>
            <p>홈구단 : 키움 히어로즈</p>
          </div>
        </div>
        <div className='stadium hanhwa'>
          <div className='infoBox'>
            <div className='stadiumInfo'>
              <h3>한화생명 볼파크</h3>
              <h4>대전</h4>
            </div>
            <p>홈구단 : 한화 이글스</p>
          </div>
        </div>
        <div className='stadium nc'>
          <div className='infoBox'>
            <div className='stadiumInfo'>
              <h3>NC파크</h3>
              <h4>창원</h4>
            </div>
            <p>홈구단 : NC 다이노스</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stadium;
