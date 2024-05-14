import React from 'react'
import Header from './Header'
const Layout = ({children}) => { 
  return (
    <div>
    <Header/>
  
        <div className='body'>
        {children}
        </div>

    </div>
  )
}

export default Layout