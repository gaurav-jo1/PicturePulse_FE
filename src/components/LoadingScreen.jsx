import React from 'react'
import PicturePulse from "../assets/Instagram_logo_dark.webp"
import "../styling/LoadingScreen.scss"
import ReactLoading from 'react-loading';

const LoadingScreen = () => {
  return (
    <div className='LoadingScreen_container'>
        <div className="LoadingScreen_meta-logo_container">
            <img src={PicturePulse} alt="PicturePulse" />
            <ReactLoading type='spinningBubbles' height={30} width={30} delay={30} />
        </div>
        <div className="LoadingScreen_meta-from_container">
          <div className="LoadingScreen_meta-name_container">
            <p>by</p>
            <p>Gaurav Joshi</p>
          </div>
        </div>
    </div>
  )
}

export default LoadingScreen