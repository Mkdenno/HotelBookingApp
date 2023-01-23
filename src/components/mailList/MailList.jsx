import React from 'react'
import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save time, Save Money!!</h1>
        <span className='mailDesc'>Signup and we will send the best deals to you</span>
        <div className='mailInputContainer'>
            <input type='text' className='' placeholder='Your Email'/>
            <button>Subscribe</button>

        </div>
        
    </div>
  )
}

export default MailList