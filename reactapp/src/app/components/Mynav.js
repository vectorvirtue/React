import React from 'react'
import mylogo from '../components/Crystal-Logo 1.png'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Mynav = () => {
  return (
    <>
    <div className='head'>
<div className='img'><Image src ={mylogo} alt="Logo" /></div>
<div className='links'>
      <div className='a'>
      <Link href='/'>Dashboard</Link>
      </div>
      <div className='a'>
      <Link href='/blog/'>Loans</Link>
      </div>
      <div className='a'>
      <Link href='#'>Investment</Link>
      </div>
      <div className='a'>
      <Link href='/contact'>Self Service</Link>
      </div>
      <div className='a'>
      <Link href='#'>Support!</Link>
      </div>
    </div>
    <div className='flex'>
  <div className='bell'> <FontAwesomeIcon icon={faBell}  /></div>
    <div className='name'> OluwaTosin Ajayi </div>
    <div className='circle'> <FontAwesomeIcon icon={faUser} style={{width:'30px'}}/> </div>
    </div>
</div>
</>
  )
}

export default Mynav