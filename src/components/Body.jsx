import React from 'react'
import Poem from './Poem/Poem'
import FancyButton from './FancyButton/FancyButton'
import DownloadButton from './DownloadButton/DownloadButton'
import IconScroller from './IconScroller/IconScroller'
import { BsStackOverflow, BsQuora } from 'react-icons/bs'
import { BiSmile, BiCheckboxSquare} from 'react-icons/bi'
import { SiDuolingo, SiOpenai } from 'react-icons/si'
import '../App.css';

const Body = () => {

  return (
    <>
        <h1>Hello there <BiSmile/></h1>
        <h2>So you may be asking yourself...</h2>
        <h4>"What is the purpose of this website?"</h4>
        <p>Well plain and simple, this website has no purpose.</p>
        <h4>"Really? A website has to servea some sort of purpose, right?"</h4>
        <p>
            Many websites are indeed used to promote or sell something. 
            But a lot of the time, websites are just used to provide information about something. 
            Websites like
            <a href='https://stackoverflow.com/' target='_blank' rel="noreferrer" className='paragraph-link'> Stack Overflow <BsStackOverflow style={{color: "#f2740d"}}/> </a>
            and
            <a href='https://quora.com/' target='_blank' rel='noreferrer' className='paragraph-link'> Quora <BsQuora style={{color: "#b92b27"}} /> </a>
            are used to bring together like-minded individuals.
            Other sites like
            <a href="http://duolingo.com" target="_blank" rel="noreferrer" className='paragraph-link'> Duolingo <SiDuolingo style={{color: "#58cc02"}} /> </a>
            are used for education.
        </p>
        
        <p>From 
            <a href="https://theuselessweb.com/" target="_blank" rel="noreferrer" className='paragraph-link'> The Useless Web <BiCheckboxSquare style={{ color: "#ff1493"}}/> </a> 
            to 
            <a href="https://chat.openai.com/chat" target="_blank" rel="noreferrer" className='paragraph-link'> ChatGPT <SiOpenai style={{color: "#10a37f"}} /> </a>
            , the internet is an amazing place.</p>
        <p>
            But at the end of the day, whether it's providing information, promoting products or services, 
            or connecting people with similar interests, everything serves its purpose.
        </p>
        <p>And for some websites, that purpose its soley for the owner.</p>
        <h4>"So, is that the purpose of this website?"</h4>
        <p>I suppose it is.</p>
        <h4>"Why couldn't you have just said that?"</h4>
        <p>Did you not read what I just wrote above.</p>
        <h4>"Yeah, but you just said before tha-..."</h4>
        <p>Yeah yeah, I know what I said. </p>
        <p>I wrote it.</p>
        <p>Anyways here's a poem that ChatGPT wrote about websites...</p>
        <Poem/>
        <div className='bottom-section'>
          <h2>Overall, I guess the purpose of this website is to just take a break from everything fancy.</h2>
          <h2>Not every website has to include a bunch of</h2>
          <FancyButton />
          <h2>OR</h2>
          <h2>Obnixous Download Buttons</h2>
          <DownloadButton/>
          <h2>OR</h2>
          <h2>Whatever this thing is...</h2>
          <IconScroller/>
        </div>
    </>
  )
}

export default Body