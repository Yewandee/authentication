import React, { useState, useEffect } from 'react';
import '../auth/auth.css'

import logo1 from '../auth/images/gtbank.png'
import logo2 from '../auth/images/mastercardd.png'

const Auth = () => {

  const [currentDateTime] = useState(new Date());



  return (
    <div className='bodyy'>
      <div className='container'>

        <div className='logo'>
          <div className='gtbank'>
            <img src={logo1} />
          </div>
          <div className='mastercard'>
            <img src={logo2} />
          </div>
        </div>

        <div className='text'>
          <h2>Purchase Authentication</h2>

          <p>Please enter the One Time Password OTP sent to your registered XXXXXX4143. You're paying the merchant Naira.com the amount
            of NGN 100.00 on {currentDateTime.toLocaleString()}
          </p>
        </div>

        <div className=''>
          <input type='text' className='input' />
        </div>

        <div>
          <button className='confirm'>CONFIRM </button>
        </div>

        <div className='col-12 button_two'>
          <button className='col-6 resend'>RESEND</button>
          <button className='col-6 cancel'>CANCEL</button>
        </div>

        <div className='footerr'>
          <p>The page will automatically timeout after 420 seconds.</p>
          <a href='#'>Need some help?</a>
        </div>

      </div>
    </div>
  )
}

export default Auth