import React from 'react'
import instagram from "../assets/instagram.webp"
import meta from "../assets/meta.webp"
import "../styling/LoadingScreen.scss"

const LoadingScreen = () => {
  return (
    <div className='LoadingScreen_container'>
        <div className="LoadingScreen_meta-logo_container">
            <img src={instagram} alt="meta" />
        </div>
        <div className="LoadingScreen_meta-from_container">
          <div className="LoadingScreen_meta-name_container">
            <p><img src={meta} alt="meta" /> Meta</p>
            <p>&nbsp;|&nbsp;</p>
            <p>Gaurav Joshi</p>
          </div>
        </div>
    </div>
  )
}

export default LoadingScreen