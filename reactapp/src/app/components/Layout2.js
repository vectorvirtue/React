import React from 'react'
import React from 'react'
import Mynav from './public/components/Mynav'

const Layout2 =({children}) => {
  return (
    <div> <Mynav/>
      <div className='body'>
        {children}
        </div></div>
  )
}

export default Layout2