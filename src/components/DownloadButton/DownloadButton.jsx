import React from 'react'
import { BsArrowUp } from 'react-icons/bs'
import './downloadButton.css'
import DownloadButtonImage  from '../../assets/DownloadButtonImage.png'

const DownloadButton = () => {
  return (
    <div className='download-button-container'>
        <a href='https://github.com/jackkieny' target='_blank' rel='noreferrer' className='download-button-link'>
            <img src={DownloadButtonImage} alt='Download Button Image' className='download-button-image'/>
        </a>
        <p className='dont-click-text'><BsArrowUp/> Psst... <BsArrowUp/> definetly <BsArrowUp/> DONT <BsArrowUp/> click <BsArrowUp/> this <BsArrowUp/> button <BsArrowUp/> </p>
    </div>
  )
}

export default DownloadButton