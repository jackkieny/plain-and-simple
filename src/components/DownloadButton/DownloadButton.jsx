import React from 'react'
import { BsArrowUp, BsXLg } from 'react-icons/bs'
import './downloadButton.css'
import DownloadButtonImage  from '../../assets/DownloadButtonImage.png'

const DownloadButton = () => {
  return (
    <div className='download-button-container'>
        <a href='https://github.com/jackkieny' target='_blank' rel='noreferrer' className='download-button-link'>
            <img src={DownloadButtonImage} alt='Download Button Image' className='download-button-image'/>
        </a>
        <p className='dont-click-text'>
          <BsXLg/> Psst... <BsArrowUp/> definetly <BsArrowUp/> DONT <BsArrowUp/> click <BsArrowUp/> this <BsArrowUp/> button <BsXLg/>
        </p>

    </div>
  )
}

export default DownloadButton