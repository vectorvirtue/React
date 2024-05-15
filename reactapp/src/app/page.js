'use client'
import React from 'react'
import Layout from './components/Layout'
import { useEffect, useState } from 'react';
export const login = () => {
  const [email, setemail] = useState("");
  const[password, setpassword] = useState("")
  return (
    <Layout>
    <div className='center'>
      <div className='login'>Log In</div>
      <div className='txt'>Your personal details will help Crystal Finance know and contact you easily.</div>
      <form>
        <label>Email Address</label>
        <input
        type='text'
    placeholder='Email Address'
      value={email} // zxab
      onChange={e => setemail(e.target.value)} // ... and update the state variable on any edits!
    />
     <label>Password</label>
        <input
        type='password'
    placeholder='*********'
      value={password} // zxab
      onChange={e => setpassword(e.target.value)} // ... and update the state variable on any edits!
    />
        
      </form>
      <div className='forgot'>Forgot Password?</div>
      <button class="custom-button">Log In</button>
    </div>

   </Layout>
  )
}

export default login
