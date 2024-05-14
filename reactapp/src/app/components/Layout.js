import React from 'react'
import Header from './public/components/Header'

const Layout = ({children}) => { 
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default Layout