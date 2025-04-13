import React from 'react'
import '../css/main/main.css'


function Main() {
  return (
    <div className='mainWrap'>

        <section>
            <h2>KBO 구단</h2>
            <div className='clubWrap'>
              <div><img src="./lgLogo.svg" alt="lgLogo" /></div>
              <div><img src="./samsungLogo.svg" alt="samsungLogo" /></div>
              <div><img src="./kiaLogo.svg" alt="kiaLogo" /></div>
              <div><img src="./doosanLogo.svg" alt="doosanLogo" /></div>
              <div><img src="./ktLogo.svg" alt="ktLogo" /></div>
              <div><img src="./ssgLogo.svg" alt="ssgLogo" /></div>
              <div><img src="./lotteLogo.svg" alt="lotteLogo" /></div>
              <div><img src="./kiwoomLogo.svg" alt="kiwoomLogo" /></div>
              <div><img src="./hanhwaLogo.svg" alt="hanhwaLogo" /></div>
              <div><img src="./ncLogo.svg" alt="ncLogo" /></div>
            </div>
        </section>

    </div>
  )
}

export default Main;
