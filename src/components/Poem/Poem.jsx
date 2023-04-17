import React from 'react'
import './poem.css'

const Poem = () => {

    const Space =()=> {
        return(
            <p style={{color: "transparent"}}>_</p>
        ) 
    }

  return (
    <div className="poem-container">
            <div className="poem">
                <h3>The Wonders of Websites</h3>
                <p>Websites, oh websites, how they do amaze,</p>
                <p>A portal to knowledge, a world to embrace,</p>
                <p>A gateway to commerce, a place to connect,</p>
                <p>A space to create, a way to reflect.</p>
                <Space/>
                <p>Some sites are for learning, with facts to impart,</p>
                <p>From languages to math, they nourish the heart,</p>
                <p>Others are for shopping, with goods to explore,</p>
                <p>From clothes to gadgets, they offer much more.</p>
                <Space/>
                <p>And then there are those, with a social design,</p>
                <p>Connecting us all, across distance and time,</p>
                <p>Friends to strangers, we find common ground,</p>
                <p>Sharing our thoughts, our passions profound.</p>
                <Space/>
                <p>Websites, oh websites, how they do inspire,</p>
                <p>With the power to inform, to entertain, to acquire,</p>
                <p>A digital landscape, with endless terrain,</p>
                <p>A world to discover, again and again.</p>
                <Space/>
                <h5 className='poem-signature'>-Chat GPT</h5>
            </div>
        </div>
  )
}

export default Poem